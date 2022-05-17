import ptcgoParser from '@sky-pose-rick/ptcgl-parser';
import deckNormalizer from './deckNormalizer';

it('7 Metal Energy BRS M', () => {
  const row = '7 Metal Energy BRS M';
  const card = ptcgoParser.parseRow(row);
  const normalized = deckNormalizer.normalizeCard(card);

  expect(normalized).toMatch(/7 metal energy energy 8/i);
});
