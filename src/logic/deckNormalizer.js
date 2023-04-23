import ptcgoParser from '@sky-pose-rick/ptcgl-parser';
import redirects from './redirects.js';
import sets from './sets.js';

const { promoSets } = sets;

function normalizeCard(card) {
  const {
    amount, name, set, code,
  } = card;

  const redirectCard = redirects.cards[card.ptcgAPI.id];
  if (redirectCard) {
    return `${amount} ${redirectCard.name}`;
  }

  const promoSet = promoSets[set];
  if (promoSet) {
    return `${amount} ${name} ${promoSet} ${code}`;
  }

  return `${amount} ${name} ${set} ${code}`;
}

function normalizeDeck(importText) {
  const parsed = ptcgoParser.parse(importText);

  let cardCount = 0;
  const cardArray = [];

  // process cards one by one
  parsed.cards.forEach((card) => {
    cardArray.push(normalizeCard(card));
    cardCount += parseInt(card.amount, 10);
  });

  return {
    cards: cardArray,
    cardCount,
  };
}

export default { normalizeDeck };
