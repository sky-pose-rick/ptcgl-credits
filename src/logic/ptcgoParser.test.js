import PTCGOParser from './ptcgoParser';

describe('test basic energy cards', () => {
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

describe('test special energy cards', () => {
  it('3 Hiding Darkness Energy DAA 175', () => {
    const row = '3 Hiding Darkness Energy DAA 175';
    const parsedRow = PTCGOParser.parseRow(row);

    expect(parsedRow[0]).toMatch(/3/);
    expect(parsedRow[1]).toMatch(/Hiding Darkness Energy/i);
  });

  it('* 4 Horror Psychic Energy RCL 172', () => {
    const row = '* 4 Horror Psychic Energy RCL 172';
    const parsedRow = PTCGOParser.parseRow(row);

    expect(parsedRow[0]).toMatch(/4/);
    expect(parsedRow[1]).toMatch(/Horror Psychic Energy/i);
  });

  it('3 Coating {M} Energy VIV 163', () => {
    const row = '3 Coating {M} Energy VIV 163';
    const parsedRow = PTCGOParser.parseRow(row);

    expect(parsedRow[0]).toMatch(/3/);
    expect(parsedRow[1]).toMatch(/Coating {M} Energy/i);
  });

  it('4 Powerful {C} Energy DAA 176', () => {
    const row = '4 Powerful {C} Energy DAA 176';
    const parsedRow = PTCGOParser.parseRow(row);

    expect(parsedRow[0]).toMatch(/4/);
    expect(parsedRow[1]).toMatch(/Powerful {C} Energy/i);
  });
});
