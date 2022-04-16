import deckParser from '@sky-pose-rick/ptcgl-parser';

function mergeLists(listArray) {
  const cards = {};

  listArray.forEach((list) => {
    const parsed = deckParser.parse(list);

    // check each card
    parsed.cards.forEach((card) => {
      // console.log(card);
      if (!card.isEnergy) {
        const { id } = card.ptcgoio;
        if (cards[id]) {
          // starting cards only include the maximum amount needed to make all 8 decks
          // battle pass decks all add to the total
          if (card.amount > cards[id].amount) {
            cards[id].amount = card.amount;
          }
        } else {
          const obj = {};
          obj.amount = card.amount;
          obj.name = card.name;
          obj.set = card.set;
          obj.code = card.code;
          obj.cost = '0';
          cards[id] = obj;
        }
      }
    });
  });

  // console.log(cards);
  return cards;
}

function mergeListsAsString(listArray) {
  return JSON.stringify(mergeLists(listArray));
}

export default { mergeLists, mergeListsAsString };
