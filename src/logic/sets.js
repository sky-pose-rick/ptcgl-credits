// copied from https://github.com/Hamatti/ptcgo-parser
// These setcodes are a mapping from PTCGO code to PokemonTCG.io set id

// need a local copy of set codes because ptcgo code is not supported in SV era

const regularSets = {
  'PR-BLW': 'bwp-bw',
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
  'PR-XY': 'xyp-xy',
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
  'PR-SM': 'smp-sm',
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
  'PR-SW': 'swshp-swsh',
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
  ASR: 'swsh10',
  PGO: 'pgo',
  LOR: 'swsh11',
  SIT: 'swsh12',
  CRZ: 'swsh12pt5',
  SVP: 'svp',
  SVI: 'sv1',
  PAL: 'sv2',
  OBF: 'sv3',
  MEW: 'sv3pt5',
  PAR: 'sv4',

  //  limitless's codes for promo sets
  BWP: 'bwp',
  XYP: 'xyp',
  SMP: 'smp',
  SSP: 'swshp',
  // SVP: 'svp'

  // play.limitless's promo sets
  'PR-SWSH': 'swshp',
  'PR-SV': 'svp',
};

const promoSets = {
  'PR-BLW': 'bwp-BW',
  'PR-XY': 'xyp-XY',
  'PR-SM': 'smp-SM',
  'PR-SW': 'swshp-SWSH',
  'PR-SV': 'svp-',

  //  limitless's codes for promo sets
  BWP: 'bwp-BW',
  XYP: 'xyp-XY',
  SMP: 'smp-SM',
  SSP: 'swshp-SWSH',
  SVP: 'svp-',

  // play.limitless's promo sets
  'PR-SWSH': 'swshp-SWSH',

  // alt sets
  /* BWALT: 'none',
  XYALT: 'none',
  SMALT: 'none',
  SHSWALT: 'none',
  SVALT: 'none', */
};

export default { regularSets, promoSets };
