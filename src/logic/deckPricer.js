import ptcgoParser from '@sky-pose-rick/ptcgl-parser';
import craftingCosts from './craftingCosts.js';
import sellingCosts from './sellingCosts.js';
import starterCards from './starterCards2023';
// import redirects from './redirects.js';
import sets from './sets.js';

function determinePrice(card, data, priceList) {
  if (card.isEnergy) {
    return 0;
  }

  if (priceList.rarityCosts[data.rarity]) {
    // SV has new rarity classificatins, ex falls under double rare
    if (data.rarity === 'Double Rare') {
      let maxCost = 400;
      data.subtypes.forEach((subtype) => {
        const cost = priceList.subtypeCosts[subtype];
        if (cost > maxCost) {
          maxCost = cost;
        }
      });
      return maxCost;
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
  return -1;
}

async function priceCard(card, isSelling) {
  const priceList = isSelling ? sellingCosts : craftingCosts;
  const newCard = { ...card };
  newCard.toCraft = newCard.amount;
  newCard.costPerCopy = 0;
  newCard.totalCost = 0;

  if (card.isEnergy) {
    return newCard;
  }

  /*
    temporarily disable this feature for now
    // find cheaper/already owned alternatives when not checking sell price
    const redirectCard = redirects.cards[newCard.ptcgoio.id];
    if (!isSelling && redirectCard) {
      newCard.redirect = redirectCard;
      newCard.ptcgoio.id = redirectCard.target;
    }
  */

  // don't need to hit api for starter cards unless it checking sell price
  console.log(card);
  const starterKey = `${card.set}-${card.code}`;
  const starterCard = starterCards.cards[starterKey];
  console.log(starterKey);
  if (!isSelling && starterCard) {
    newCard.toCraft = Math.max(0, newCard.amount - starterCard.amount);
    newCard.costPerCopy = starterCard.cost;
    newCard.totalCost = newCard.costPerCopy * newCard.toCraft;

    return newCard;
  }

  // if there is no ptcgoio code, search with set and number instead
  const ptcgioURL = card.ptcgoio.missing
    ? `https://api.pokemontcg.io/v2/cards?q=set.id:${sets.regularSets[card.set]} number:${card.code}`
    : `https://api.pokemontcg.io/v2/cards/${newCard.ptcgoio.id}`;

  let response;

  try {
    response = await fetch(ptcgioURL);
  } catch (e) {
    console.error(e);
  }

  let cost = -1;
  // console.log(data);
  if (response.status === 429) {
    console.error('Too many requests to pokemontcg.io API (limit is 60/minute)');
  } else if (response.status === 404) {
    console.error('Card not found:', card);
  } else {
    const data = await response.json();
    if (card.ptcgoio.missing) {
      if (data.count === 0) {
        console.error('Card not found:', card);
        newCard.notFound = true;
      } else {
        newCard.ptcgoio.id = data.data[0].id;
        cost = determinePrice(newCard, data.data[0], priceList);
      }
    } else {
      cost = determinePrice(newCard, data.data, priceList);
    }
  }

  if (cost < 0) {
    newCard.notFound = true;
    newCard.costPerCopy = 0;
    newCard.totalCost = 0;
  } else {
    newCard.costPerCopy = cost;
    newCard.totalCost = cost * newCard.amount;
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
