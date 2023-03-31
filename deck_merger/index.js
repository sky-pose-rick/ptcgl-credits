import fs from 'fs/promises';
import deckMerger from './merger.js';
import lists2022 from './starterDecks2023.js';

function getLists() {
  return lists2022.lists;
}

console.log('Pass an output destination and a Pokemon TCG API key as an argument for more accurate details');
const userArgs = process.argv.slice(2);
const outputFilename = userArgs[0];
const apiKey = userArgs[1];
console.log(apiKey);

deckMerger.mergeListsAsString(getLists(), apiKey).then((result) => {
  fs.writeFile(outputFilename, result)
    .then(() => console.log('done'))
    .catch((err) => console.log(err));
});
