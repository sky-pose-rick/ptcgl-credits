import ptcgoParser from './ptcgoParser.js';
import craftingCosts from './craftingCosts.js';
import sellingCosts from './sellingCosts.js';

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

async function priceCard(card, priceList) {
  const ptcgioURL = `https://api.pokemontcg.io/v2/cards/${card.ptcgoio.id}`;

  let response;

  try {
    response = await fetch(ptcgioURL);
  } catch (e) {
    console.error(e);
  }

  const newCard = { ...card };

  // console.log(data);
  if (response.status === 429) {
    console.error('Too many requests to pokemontcg.io API (limit is 60/minute)');
    newCard.costPerCopy = 0;
    newCard.totalCost = 0;
    newCard.notFound = true;
  } else if (response.status === 404) {
    console.error('Card not found:', card);
    newCard.costPerCopy = 0;
    newCard.totalCost = 0;
    newCard.notFound = true;
  } else {
    const data = await response.json();
    newCard.costPerCopy = determinePrice(newCard, data.data, priceList);
    newCard.totalCost = newCard.costPerCopy * newCard.amount;
  }

  return newCard;
}

async function priceDeckGeneric(importText, priceList) {
  const parsed = ptcgoParser.parse(importText);

  // const promiseArray = [];
  const promiseArray = [];
  let total = 0;
  let cardCount = 0;

  // process cards one by one
  parsed.cards.forEach((card) => {
    promiseArray.push(priceCard(card, priceList));
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
  return priceDeckGeneric(importText, sellingCosts);
}

function priceDeckBuy(importText) {
  return priceDeckGeneric(importText, craftingCosts);
}

function priceDeck(importText) {
  return priceDeckBuy(importText);
}

export default { priceDeck, priceDeckBuy, priceDeckSell };
