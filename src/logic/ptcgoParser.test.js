import PTCGOParser from './ptcgoParser';

describe('test energy cards', () => {
  it('7 Metal Energy BRS M', () => {
    const row = '7 Metal Energy BRS M';
    const parsedRow = PTCGOParser.parseRow(row);

    expect(parsedRow[0]).toMatch(/7/);
    expect(parsedRow[1]).toMatch(/metal/i);
  });

  it('* 7 Fire Energy BUS 167', () => {
    const row = '* 7 Fire Energy BUS 167';
    const parsedRow = PTCGOParser.parseRow(row);

    expect(parsedRow[0]).toMatch(/7/);
    expect(parsedRow[1]).toMatch(/fire/i);
  });

  it('* 7 Darkness Energy Energy 7', () => {
    const row = '* 7 Darkness Energy Energy 7';
    const parsedRow = PTCGOParser.parseRow(row);

    expect(parsedRow[0]).toMatch(/7/);
    expect(parsedRow[1]).toMatch(/darkness/i);
  });

  it('2 Basic {P} Energy Energy 40', () => {
    const row = '2 Basic {P} Energy Energy 40';
    const parsedRow = PTCGOParser.parseRow(row);

    expect(parsedRow[0]).toMatch(/2/);
    expect(parsedRow[1]).toMatch(/psychic/i);
  });

  it('* 12 Metal Energy SMEnergy 8', () => {
    const row = '* 12 Metal Energy SMEnergy 8';
    const parsedRow = PTCGOParser.parseRow(row);

    expect(parsedRow[0]).toMatch(/12/);
    expect(parsedRow[1]).toMatch(/metal/i);
  });

  it('* 2 Darkness Energy SWSHEnergy 7', () => {
    const row = '* 2 Darkness Energy SWSHEnergy 7';
    const parsedRow = PTCGOParser.parseRow(row);

    expect(parsedRow[0]).toMatch(/2/);
    expect(parsedRow[1]).toMatch(/darkness/i);
  });

  it('4 Basic {F} Energy Energy 41', () => {
    const row = '4 Basic {F} Energy Energy 41';
    const parsedRow = PTCGOParser.parseRow(row);

    expect(parsedRow[0]).toMatch(/4/);
    expect(parsedRow[1]).toMatch(/fighting/i);
  });

  it('7 Basic {W} Energy Energy 38', () => {
    const row = '7 Basic {W} Energy Energy 38';
    const parsedRow = PTCGOParser.parseRow(row);

    expect(parsedRow[0]).toMatch(/7/);
    expect(parsedRow[1]).toMatch(/water/i);
  });

  it('12 Basic {W} Energy Energy 38', () => {
    const row = '12 Basic {W} Energy Energy 38';
    const parsedRow = PTCGOParser.parseRow(row);

    expect(parsedRow[0]).toMatch(/12/);
    expect(parsedRow[1]).toMatch(/water/i);
  });
});
