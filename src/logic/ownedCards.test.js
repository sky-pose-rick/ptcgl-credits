import owned from './ownedCards';

it('local storage works', () => {
  const storageKey = 'credits-jest';
  const list = {
    'swsh6-69': {
      amount: 3,
    },
    'swsh5-37': {
      amount: 1,
    },
  };
  localStorage.setItem(storageKey, JSON.stringify(list));

  const retrieved = JSON.parse(localStorage.getItem(storageKey));

  expect(retrieved['swsh6-69'].amount).toEqual(3);
});

function setStartingCounts() {
  localStorage.removeItem('credits-owned-cards');
  // pricer returns an array
  const list = [
    {
      ptcgoio: {
        id: 'swsh1-178',
      },
      toCraft: 2,
      set: 'SSH',
      code: '178',
      amount: 3,
      costPerCopy: 425,
      totalCost: 3 * 425,
    },
    {
      ptcgoio: {
        id: 'swsh6-159',
      },
      toCraft: 4,
      amount: 4,
    },
    {
      ptcgoio: {
        id: 'swsh1-58',
      },
      toCraft: 0,
      amount: 2,
    },
    {
      isEnergy: true,
    },
    {
      notFound: true,
    },
  ];

  owned.updateOwnedCounts(list);
}

it('can use pricer card list to set number of owned cards in storage, ignoring energy and unfound cards', () => {
  setStartingCounts();
  const stored = owned.getOwnedCounts();

  expect(stored['swsh1-178']).toBe(1);
  expect(stored['swsh6-159']).toBeFalsy();
  expect(stored['swsh1-58']).toBe(2);
});

it('can read from storage to update crafting amount in pricer', () => {
  setStartingCounts();

  const newList = [
    {
      // first list owned 1, this owns 0 of 3
      ptcgoio: {
        id: 'swsh1-178',
      },
      toCraft: 3,
      amount: 3,
    },
    {
      // first list owned 0, this owns 3 of 4
      ptcgoio: {
        id: 'swsh6-159',
      },
      toCraft: 1,
      amount: 4,
    },
    {
      // first list owned 2, this owns 3 of 4
      ptcgoio: {
        id: 'swsh1-58',
      },
      toCraft: 1,
      amount: 4,
    },
  ];

  const updatedList = owned.adjustCraftingWithOwned(newList);
  // owned 1 before, bring 0 now
  expect(updatedList[0].toCraft).toEqual(2);
  // owned 0 before, bring 3 now
  expect(updatedList[1].toCraft).toEqual(1);
  // owned 2 before, bring 3 now
  expect(updatedList[2].toCraft).toEqual(1);
});

it('does not overwrite the storage', () => {
  setStartingCounts();

  const newList = [
    {
      // first list owned 1, this owns 0 of 3
      ptcgoio: {
        id: 'swsh1-178',
      },
      toCraft: 3,
      amount: 3,
    },
    {
      // first list did not have this card
      ptcgoio: {
        id: 'swsh1-174',
      },
      toCraft: 1,
      amount: 4,
    },
  ];

  owned.updateOwnedCounts(newList);
  const stored = owned.getOwnedCounts();

  // now own 0 of this card
  expect(stored['swsh1-178']).toBeFalsy();
  // this card was not in new deck
  expect(stored['swsh1-58']).toBeTruthy();
  // a new card
  expect(stored['swsh1-174']).toBeTruthy();
});
