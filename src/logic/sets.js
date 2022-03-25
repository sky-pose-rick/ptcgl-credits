// copied from https://github.com/Hamatti/ptcgo-parser
// These setcodes are a mapping from PTCGO code to PokemonTCG.io set id

const setcodes = {
  BS: 'base1',
  JU: 'base2',
  PR: 'basep',
  FO: 'base3',
  B2: 'base4',
  TR: 'base5',
  G1: 'gym1',
  G2: 'gym2',
  N1: 'neo1',
  N2: 'neo2',
  N3: 'neo3',
  N4: 'neo4',
  LC: 'base6',
  EX: 'ecard1',
  AQ: 'ecard2',
  SK: 'ecard3',
  RS: 'ex1',
  SS: 'ex2',
  DR: 'ex3',
  'PR-NP': 'np',
  MA: 'ex4',
  HL: 'ex5',
  RG: 'ex6',
  RR: 'ex7',
  DX: 'ex8',
  EM: 'ex9',
  UF: 'ex10',
  DS: 'ex11',
  LM: 'ex12',
  HP: 'ex13',
  CG: 'ex14',
  DF: 'ex15',
  PK: 'ex16',
  'PR-DPP': 'dpp',
  DP: 'dp1',
  MT: 'dp2',
  SW: 'dp3',
  GE: 'dp4',
  MD: 'dp5',
  LA: 'dp6',
  SF: 'dp7',
  PL: 'pl1',
  SV: 'pl3',
  AR: 'pl4',
  'PR-HS': 'hsp',
  HS: 'hgss1',
  UL: 'hgss2',
  UD: 'hgss3',
  TM: 'hgss4',
  CL: 'col1',
  'PR-BLW': 'bwp',
  BLW: 'bw1',
  EPO: 'bw2',
  NVI: 'bw3',
  NXD: 'bw4',
  DEX: 'bw5',
  DRX: 'bw6',
  DRV: 'dv1',
  BCR: 'bw7',
  PLS: 'bw8',
  PLF: 'bw9',
  PLB: 'bw10',
  'PR-XY': 'xyp',
  LTR: 'bw11',
  KSS: 'xy0',
  XY: 'xy1',
  FLF: 'xy2',
  FFI: 'xy3',
  PHF: 'xy4',
  PRC: 'xy5',
  DCR: 'dc1',
  ROS: 'xy6',
  AOR: 'xy7',
  BKT: 'xy8',
  BKP: 'xy9',
  GEN: 'g1',
  FCO: 'xy10',
  STS: 'xy11',
  EVO: 'xy12',
  'PR-SM': 'smp',
  SUM: 'sm1',
  GRI: 'sm2',
  BUS: 'sm3',
  SLG: 'sm35',
  CIN: 'sm4',
  UPR: 'sm5',
  FLI: 'sm6',
  CES: 'sm7',
  DRM: 'sm75',
  LOT: 'sm8',
  TEU: 'sm9',
  GUM: 'det1',
  UNB: 'sm10',
  UNM: 'sm11',
  HIF: 'sm115',
  // no ptcgo code for shiny vault: 'sma',
  CEC: 'sm12',
  'PR-SW': 'swshp',
  SSH: 'swsh1',
  RCL: 'swsh2',
  DAA: 'swsh3',
  CPA: 'swsh35',
  VIV: 'swsh4',
  SHF: 'swsh45',
  // SHF: 'swsh45sv',
  BST: 'swsh5',
  CRE: 'swsh6',
  EVS: 'swsh7',
  CEL: 'cel25',
  // CEL: 'cel25c',
  FST: 'swsh8',
  BRS: 'swsh9',
  // BRS: 'swsh9tg',

  //  limitless's codes for promo sets
  BWP: 'bwp',
  XYP: 'xyp',
  SMP: 'smp',
  SSP: 'swshp',
};

export default setcodes;
