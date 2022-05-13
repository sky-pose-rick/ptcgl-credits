import ptcgoParser from '@sky-pose-rick/ptcgl-parser';
import craftingCosts from './craftingCosts.js';
import sellingCosts from './sellingCosts.js';
import starterCards from './starterCards2022';
import redirects from './redirects.js';

function determinePrice(card, data, priceList) {
  if (card.isEnergy) {
    return 0;
  }

  // promos all have promo rarity
  if (data.rarity === 'Promo') {
    let maxCost = 400;
    data.subtypes.forEach((subtype) => {
      const cost = priceList.subtypeCosts[subtype];
      if (cost > maxCost) {
        maxCost = cost;
      }
    });
    return maxCost;
  }

  return priceList.rarityCosts[data.rarity];
}

async function priceCard(card, isSelling) {
  const priceList = isSelling ? sellingCosts : craftingCosts;
  const newCard = { ...card };
  newCard.toCraft = newCard.amount;
  newCard.costPerCopy = 0;
  newCard.totalCost = 0;

  // insert logic for checking if parser failed to get a ptcgio id

  // find cheaper/already owned alternatives when not checking sell price
  const redirectCard = redirects.cards[newCard.ptcgoio.id];
  if (!isSelling && redirectCard) {
    newCard.redirect = redirectCard;
    newCard.ptcgoio.id = redirectCard.target;
  }

  // don't need to hit api for starter cards unless it checking sell price
  const starterCard = starterCards.cards[card.ptcgoio.id];
  if (!isSelling && starterCard) {
    newCard.toCraft = Math.max(0, newCard.amount - starterCard.amount);
    newCard.costPerCopy = starterCard.cost;
    newCard.totalCost = newCard.costPerCopy * newCard.toCraft;

    return newCard;
  }

  const ptcgioURL = `https://api.pokemontcg.io/v2/cards/${newCard.ptcgoio.id}`;

  let response;

  try {
    response = await fetch(ptcgioURL);
  } catch (e) {
    console.error(e);
  }

  // console.log(data);
  if (response.status === 429) {
    console.error('Too many requests to pokemontcg.io API (limit is 60/minute)');
    newCard.notFound = true;
  } else if (response.status === 404) {
    console.error('Card not found:', card);
    newCard.notFound = true;
  } else {
    const data = await response.json();
    newCard.costPerCopy = determinePrice(newCard, data.data, priceList);
    newCard.totalCost = newCard.costPerCopy * newCard.amount;
  }

  return newCard;
}

async function priceDeckGeneric(importText, isSelling) {
  const parsed = ptcgoParser.parse(importText);

  // const promiseArray = [];
  const promiseArray = [];
  let total = 0;
  let cardCount = 0;

  // process cards one by one
  parsed.cards.forEach((card) => {
    promiseArray.push(priceCard(card, isSelling));
  });

  const dataArray = await Promise.all(promiseArray);
  dataArray.forEach((card) => {
    // console.log(card);
    total += card.totalCost;
    if (!card.notFound) { cardCount += parseInt(card.amount, 10); }
  });

  return {
    total,
    cards: dataArray,
    cardCount,
  };
}

function priceDeckSell(importText) {
  return priceDeckGeneric(importText, true);
}

function priceDeckBuy(importText) {
  return priceDeckGeneric(importText, false);
}

function priceDeck(importText) {
  return priceDeckBuy(importText);
}

export default { priceDeck, priceDeckBuy, priceDeckSell };
