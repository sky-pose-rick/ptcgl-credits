const storageKey = 'credits-owned-cards';

function updateOwnedCounts(cardArray) {
  const ownedCardsObj = JSON.parse(localStorage.getItem(storageKey)) || {};
  cardArray.forEach((card) => {
    if (!card.isEnergy && !card.notFound) {
      const { id } = card.ptcgoio;
      const count = card.amount - card.toCraft;
      if (count > 0) {
        if (ownedCardsObj[id]) {
          // card already in storage
          // only change owned count if amount to craft is greater than 0 or new count is larger
          if (card.toCraft > 0 || count > ownedCardsObj[id]) {
            ownedCardsObj[card.ptcgoio.id] = count;
          }
        } else {
          ownedCardsObj[card.ptcgoio.id] = count;
        }
      } else {
        delete ownedCardsObj[card.ptcgoio.id];
      }
    }
  });

  localStorage.setItem(storageKey, JSON.stringify(ownedCardsObj));
}

function getOwnedCounts() {
  const ownedCardsObj = JSON.parse(localStorage.getItem(storageKey)) || {};
  return ownedCardsObj;
}

function adjustCraftingWithOwned(cardArray) {
  const newCardArray = [];
  const ownedCardsObj = JSON.parse(localStorage.getItem(storageKey)) || {};

  cardArray.forEach((card) => {
    const newCard = { ...card };
    if (!card.isEnergy || !card.notFound) {
      const owned = ownedCardsObj[card.ptcgoio.id];
      const count = card.amount - card.toCraft;
      if (owned > count) {
        newCard.toCraft = Math.max(card.amount - owned, 0);
        // adjust totals
        newCard.totalCost = newCard.costPerCopy * newCard.toCraft;
      }
    }

    newCardArray.push(newCard);
  });

  return newCardArray;
}

export default { updateOwnedCounts, getOwnedCounts, adjustCraftingWithOwned };
