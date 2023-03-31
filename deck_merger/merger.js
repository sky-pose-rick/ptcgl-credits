import deckParser from '@sky-pose-rick/ptcgl-parser';
import craftingCosts from './craftingCosts.js';

function filterSpecialNames(cardName) {
  if (cardName.indexOf('Professor\'s Research') > -1) { return 'Professor\'s Research'; }
  if (cardName.indexOf('Boss\'s Orders') > -1) { return 'Boss\'s Orders'; }
  return cardName;
}

function determinePrice(card, data) {
  if (card.isEnergy) {
    return 0;
  }

  if (craftingCosts.rarityCosts[data.rarity]) {
    // promos all have promo rarity
    if (data.rarity === 'Promo') {
      let maxCost = 400;
      data.subtypes.forEach((subtype) => {
        const cost = craftingCosts.subtypeCosts[subtype];
        if (cost > maxCost) {
          maxCost = cost;
        }
      });
      return maxCost;
    }

    return craftingCosts.rarityCosts[data.rarity];
  }
  return -1;
}

async function getCardFromAPI(card, apiKey) {
  const url = `https://api.pokemontcg.io/v2/cards?q=set.ptcgoCode:${card.set} number:${card.code}`;
  let cardDetails;
  let response;
  try {
    response = await fetch(url);
  } catch (e) {
    console.error(e);
  }

  if (response.status === 429) {
    console.error('Too many requests to API');
  } else if (response.status === 404) {
    console.error('Card not found:', card);
  } else {
    const data = await response.json();
    if (data.count === 0) {
      console.error('Card not found:', card);
    } else {
      cardDetails = data.data[0];
    }
  }

  return cardDetails;
}

async function mergeLists(listArray, apiKey) {
  console.log(apiKey, 'used');
  const cards = {};

  for (let i = 0; i < listArray.length; i += 1) {
    const list = listArray[i];
    const parsed = deckParser.parse(list);

    for (let j = 0; j < parsed.cards.length; j += 1) {
      const card = parsed.cards[j];
      // console.log(card);
      if (!card.isEnergy) {
        const id = `${card.set}-${card.code}`;
        if (cards[id]) {
          // starting cards only include the maximum amount needed to make all 8 decks
          // battle pass decks all add to the total
          if (card.amount > cards[id].amount) {
            cards[id].amount = card.amount;
          }
        } else {
          // fetch name, rarity, and supertype from pokemon tcg api if a key is provided
          const obj = {
            amount: card.amount,
            set: card.set,
            code: card.code,
          };
          if (apiKey != null) {
            // eslint-disable-next-line no-await-in-loop
            const data = await getCardFromAPI(card, apiKey);
            obj.cost = determinePrice(card, data);
            obj.name = filterSpecialNames(data.name);
            obj.supertype = data.supertype;
          } else {
            obj.name = card.name;
            obj.cost = '0';
            obj.supertype = 'unknown';
          }
          cards[id] = obj;
        }
      }
    }
  }

  // console.log(cards);
  return cards;
}

async function mergeListsAsString(listArray, apiKey) {
  const merged = await mergeLists(listArray, apiKey);
  return JSON.stringify(merged);
}

export default { mergeLists, mergeListsAsString };
