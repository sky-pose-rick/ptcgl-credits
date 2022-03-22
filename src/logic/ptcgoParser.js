// copied from https://github.com/Hamatti/ptcgo-parser
import setcodes from './sets.js';

const SET_PATTERN = /(?:\* )?(\d+) (.*) ([A-Z]{2,3}|[A-Z]{2}-[A-Z]{2}|[A-Z0-9]{3})? (\d+|XY\d+|BW\d+)/;
const BASIC_ENERGY_COUNT_PATTERN = /(?:\* )?\d+/;

const BASIC_ENERGY_TYPES = [
  'Darkness',
  'Fairy',
  'Fighting',
  'Fire',
  'Grass',
  'Lightning',
  'Metal',
  'Psychic',
  'Water',
];

const PTCGL_BASIC_ENERGY = [
  '{D}',
  '{Y}',
  '{F}',
  '{R}',
  '{G}',
  '{L}',
  '{M}',
  '{P}',
  '{W}',
];

const BASIC_ENERGY_IDS = {
  Darkness: 'sm1-170',
  Fairy: 'sm1-172',
  Fighting: 'sm1-169',
  Fire: 'sm1-165',
  Grass: 'sm1-164',
  Lightning: 'sm1-167',
  Metal: 'sm1-171',
  Psychic: 'sm1-168',
  Water: 'sm1-166',
};

const detectBasicEnergy = (row) => {
  const result = BASIC_ENERGY_TYPES.findIndex((energy, index) => (row.includes(`${energy} Energy`)
    || row.includes(`${PTCGL_BASIC_ENERGY[index]} Energy`)));
  return BASIC_ENERGY_TYPES[result];
};

const parseRow = (row) => {
  const isBasicEnergy = detectBasicEnergy(row);
  if (isBasicEnergy) {
    const energyCount = row.match(BASIC_ENERGY_COUNT_PATTERN)[0];
    return [energyCount, isBasicEnergy];
  }
  const result = row.match(SET_PATTERN);
  return result && result.slice(1);
};

const parse = (decklist) => {
  const parsed = {
    cards: decklist
      .split('\n')
      .map((row) => {
        const card = parseRow(row);
        if (card) {
          const [amount, name, set, code] = card;
          let promoSet = null;
          let isEnergy = false;

          if (set && set.startsWith('PR')) {
            // eslint-disable-next-line prefer-destructuring
            promoSet = set.split('-')[1];
          }

          if (BASIC_ENERGY_TYPES.indexOf(name) >= 0) {
            isEnergy = true;
          }

          let idCode = null;
          if (promoSet) {
            idCode = `${setcodes[set]}-${promoSet}${code}`;
          } else if (isEnergy) {
            idCode = `${BASIC_ENERGY_IDS[name]}`;
          } else {
            idCode = `${setcodes[set]}-${code}`;
          }

          return {
            amount,
            name,
            set,
            code,
            ptcgoio: {
              id: idCode,
            },
          };
        }
        return null;
      })
      .filter((c) => c),
  };

  return parsed;
};

export default { parse, parseRow };
