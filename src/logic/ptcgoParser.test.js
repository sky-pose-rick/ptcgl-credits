import PTCGOParser from './ptcgoParser';

describe('test basic energy cards', () => {
  it('7 Metal Energy BRS M', () => {
    const row = '7 Metal Energy BRS M';
    const card = PTCGOParser.parseRow(row);

    expect(card.amount).toEqual('7');
    expect(card.name).toMatch(/metal/i);
  });

  it('* 7 Fire Energy BUS 167', () => {
    const row = '* 7 Fire Energy BUS 167';
    const card = PTCGOParser.parseRow(row);

    expect(card.amount).toEqual('7');
    expect(card.name).toMatch(/fire/i);
  });

  it('* 7 Darkness Energy Energy 7', () => {
    const row = '* 7 Darkness Energy Energy 7';
    const card = PTCGOParser.parseRow(row);

    expect(card.amount).toEqual('7');
    expect(card.name).toMatch(/darkness/i);
  });

  it('2 Basic {P} Energy Energy 40', () => {
    const row = '2 Basic {P} Energy Energy 40';
    const card = PTCGOParser.parseRow(row);

    expect(card.amount).toEqual('2');
    expect(card.name).toMatch(/psychic/i);
  });

  it('* 12 Metal Energy SMEnergy 8', () => {
    const row = '* 12 Metal Energy SMEnergy 8';
    const card = PTCGOParser.parseRow(row);

    expect(card.amount).toEqual('12');
    expect(card.name).toMatch(/metal/i);
  });

  it('* 2 Darkness Energy SWSHEnergy 7', () => {
    const row = '* 2 Darkness Energy SWSHEnergy 7';
    const card = PTCGOParser.parseRow(row);

    expect(card.amount).toEqual('2');
    expect(card.name).toMatch(/darkness/i);
  });

  it('4 Basic {F} Energy Energy 41', () => {
    const row = '4 Basic {F} Energy Energy 41';
    const card = PTCGOParser.parseRow(row);

    expect(card.amount).toEqual('4');
    expect(card.name).toMatch(/fighting/i);
  });

  it('7 Basic {W} Energy Energy 38', () => {
    const row = '7 Basic {W} Energy Energy 38';
    const card = PTCGOParser.parseRow(row);

    expect(card.amount).toEqual('7');
    expect(card.name).toMatch(/water/i);
  });

  it('12 Basic {W} Energy Energy 38', () => {
    const row = '12 Basic {W} Energy Energy 38';
    const card = PTCGOParser.parseRow(row);

    expect(card.amount).toMatch(/12/);
    expect(card.name).toMatch(/water/i);
  });
});

describe('test special energy cards', () => {
  it('3 Hiding Darkness Energy DAA 175', () => {
    const row = '3 Hiding Darkness Energy DAA 175';
    const card = PTCGOParser.parseRow(row);

    expect(card.amount).toMatch(/3/);
    expect(card.name).toMatch(/Hiding Darkness Energy/i);
  });

  it('* 4 Horror Psychic Energy RCL 172', () => {
    const row = '* 4 Horror Psychic Energy RCL 172';
    const card = PTCGOParser.parseRow(row);

    expect(card.amount).toMatch(/4/);
    expect(card.name).toMatch(/Horror Psychic Energy/i);
  });

  it('3 Coating {M} Energy VIV 163', () => {
    const row = '3 Coating {M} Energy VIV 163';
    const card = PTCGOParser.parseRow(row);

    expect(card.amount).toMatch(/3/);
    expect(card.name).toMatch(/Coating {M} Energy/i);
  });

  it('4 Powerful {C} Energy DAA 176', () => {
    const row = '4 Powerful {C} Energy DAA 176';
    const card = PTCGOParser.parseRow(row);

    expect(card.amount).toMatch(/4/);
    expect(card.name).toMatch(/Powerful {C} Energy/i);
  });
});

it('has a basic energy flag', () => {
  const row1 = '12 Basic {W} Energy Energy 38';
  const card1 = PTCGOParser.parseRow(row1);

  expect(card1.isEnergy).toBeTruthy();

  const row2 = '3 Hiding Darkness Energy DAA 175';
  const card2 = PTCGOParser.parseRow(row2);

  expect(card2.isEnergy).toBeFalsy();
});

describe('promo cards', () => {
  it('* 3 Reshiram & Charizard-GX PR-SM 201', () => {
    const row = '* 3 Reshiram & Charizard-GX PR-SM 201';
    const card = PTCGOParser.parseRow(row);

    expect(card.ptcgoio.id).toMatch(/smp-sm201/i);
  });

  it('4 Jolteon V SSP 183', () => {
    const row = '4 Jolteon V SSP 183';
    const card = PTCGOParser.parseRow(row);

    expect(card.ptcgoio.id).toMatch(/swshp-SWSH183/i);
  });

  it('* 4 Zacian V PR-SW 18', () => {
    const row = '* 4 Zacian V PR-SW 18';
    const card = PTCGOParser.parseRow(row);

    expect(card.ptcgoio.id).toMatch(/swshp-SWSH018/i);
  });

  it('* 4 Grookey PR-SWSH 1', () => {
    const row = '* 4 Grookey PR-SWSH 1';
    const card = PTCGOParser.parseRow(row);

    expect(card.ptcgoio.id).toMatch(/swshp-SWSH001/i);
  });

  it('2 Dragonite V PR-SWSH 154', () => {
    const row = '2 Dragonite V PR-SWSH 154';
    const card = PTCGOParser.parseRow(row);

    expect(card.ptcgoio.id).toMatch(/swshp-SWSH154/i);
  });
});

describe('subset numbering', () => {
  it('1 Wally GEN RC27', () => {
    const row = '1 Wally GEN RC27';
    const card = PTCGOParser.parseRow(row);

    expect(card.ptcgoio.id).toMatch(/g1-RC27/i);
  });

  /* TODO:
    shiny vault 1
    shiny vault 2
    trainger gallery
    legendary collection
    others?
  */
});
