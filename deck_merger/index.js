import deckMerger from './merger.js';
import lists2022 from './starterDecks2022.js';

function getLists() {
  return lists2022.lists;
}

const result1 = deckMerger.mergeLists(getLists());
console.log(result1);

/* const result2 = deckMerger.mergeListsAsString(getLists());
console.log(result2); */
