import ptcgoParser from './ptcgoParser.js';
import craftingCosts from './craftingCosts.js';

async function priceDeck(importText) {
  const parsed = ptcgoParser.parse(importText);

  // const promiseArray = [];
  const promiseArray = [];
  let total = 0;

  // process cards one by one
  parsed.cards.forEach((card) => {
    const ptcgioURL = `https://api.pokemontcg.io/v2/cards/${card.ptcgoio.id}`;
    // eslint-disable-next-line no-async-promise-executor
    const newPromise = new Promise(async (resolve) => {
      const response = await fetch(ptcgioURL);
      const data = await response.json();
      // console.log(data);
      if (data.error) {
        // console.error(data.error.message);
        console.error('Card not found:', card.name, card.set, card.code);
        const newCard = { ...card };
        newCard.rarity = null;
        newCard.costPerCopy = 0;
        newCard.totalCost = 0;
        newCard.notFound = true;
      } else {
        const newCard = { ...card };
        newCard.rarity = data.data.rarity;
        newCard.costPerCopy = craftingCosts[newCard.rarity];
        newCard.totalCost = newCard.costPerCopy * newCard.amount;
        resolve(newCard);
      }
    });
    promiseArray.push(newPromise);
  });

  const dataArray = await Promise.all(promiseArray);
  dataArray.forEach((card) => {
    total += card.totalCost;
  });

  return {
    total,
    cards: dataArray,
  };
}

export default { priceDeck };
