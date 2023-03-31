const lists = [
  `Giratina VStar
  Pokémon: 7
2 Giratina V LOR 130
1 Lumineon V BRS 40
4 Comfey LOR 79
2 Giratina VSTAR LOR 131
2 Sableye LOR 70
1 Snorlax LOR 143
2 Cramorant LOR 50

Trainer: 12
3 Ultra Ball SVI 196
4 Switch SVI 194
4 Escape Rope BST 125
1 Thorton LOR 167
4 Cross Switcher FST 230
1 Lost Vacuum LOR 162
1 Gardenia's Vigor ASR 143
4 Mirage Gate LOR 163
4 Nest Ball SVI 181
4 Colress's Experiment LOR 155
2 Beach Court SVI 167
1 Boss's Orders BRS 132

Energy: 3
1 Basic {W} Energy SVE 3
6 Basic {G} Energy SVE 1
6 Basic {P} Energy SVE 5

Total Cards: 60
  `,
  `Koraidon ex
  Pokémon: 8
  1 Lucario BRS 79
  1 Lucario SVI 114
  2 Riolu SVI 113
  2 Revavroom SVI 142
  2 Varoom SVI 140
  1 Diancie ASR 68
  4 Koraidon ex SVI 125
  1 Great Tusk ex SVI 123

  Trainer: 15
  3 Trekking Shoes ASR 156
  1 Grant ASR 144
  2 Escape Rope BST 125
  1 Energy Search SVI 172
  3 Nest Ball SVI 181
  4 Professor's Research SVI 189
  4 Gutsy Pickaxe ASR 145
  1 Klara CRE 145
  2 Arven SVI 166
  1 Defiance Band SVI 169
  2 Lake Acuity LOR 160
  2 Boss's Orders BRS 132
  4 Ultra Ball SVI 196
  2 Switch SVI 194
  2 Rock Chestplate SVI 192

  Energy: 1
  12 Basic {F} Energy SVE 6

  Total Cards: 60
  `,
  `Mewtwo VStar
  Pokémon: 5
  4 Lunatone PGO 34
  2 Mewtwo V PGO 30
  2 Mewtwo VSTAR PGO 31
  4 Solrock PGO 39
  1 Radiant Greninja ASR 46

  Trainer: 12
  2 Raihan EVS 152
  3 Rescue Carrier EVS 154
  4 Cross Switcher FST 230
  4 Level Ball BST 129
  2 Avery CRE 130
  4 Trekking Shoes ASR 156
  2 Hisuian Heavy Ball ASR 146
  3 Fog Crystal CRE 140
  3 PokéStop PGO 68
  3 Nest Ball SVI 181
  4 Professor's Research SVI 189
  2 Cynthia's Ambition BRS 138

  Energy: 1
  11 Basic {P} Energy SVE 5

  Total Cards: 60
  `,
  `Serperior VStar
  Pokémon: 10
  1 Kricketune ASR 10
  1 Kricketot ASR 9
  2 Serperior VSTAR SIT 8
  1 Kricketune V BST 6
  4 Swablu EVS 132
  2 Serperior V SIT 7
  1 Pyukumuku FST 77
  2 Altaria SIT 143
  1 Manaphy BRS 41
  2 Altaria EVS 106

  Trainer: 13
  1 Raihan EVS 152
  2 Gardenia's Vigor ASR 143
  4 Level Ball BST 129
  1 Avery CRE 130
  3 Jacq SVI 175
  4 Nest Ball SVI 181
  1 Worker SIT 167
  1 Roxanne ASR 150
  2 Leafy Camo Poncho SIT 160
  2 Boss's Orders BRS 132
  4 Ultra Ball SVI 196
  2 Switch SVI 194
  4 Professor's Research SVI 190

  Energy: 2
  8 Basic {G} Energy SVE 1
  4 Double Turbo Energy BRS 151

  Total Cards: 60
  `,
  `Dialga VStar
  Pokémon: 8
  4 Magnezone ASR 107
  2 Origin Forme Dialga VSTAR ASR 114
  2 Bibarel BRS 121
  1 Magneton ASR 106
  1 Zamazenta V BRS 105
  2 Origin Forme Dialga V ASR 113
  4 Magnemite ASR 105
  2 Bidoof CRZ 111

  Trainer: 11
  1 Tool Jammer BST 136
  4 Ultra Ball SVI 196
  2 Escape Rope BST 125
  1 Energy Recycler BST 124
  4 Avery CRE 130
  1 Battle VIP Pass FST 225
  3 Rare Candy PGO 69
  2 Full Face Guard EVS 148
  3 Nest Ball SVI 181
  4 Arven SVI 166
  3 Boss's Orders BRS 132

  Energy: 1
  14 Basic {M} Energy SVE 8

  Total Cards: 60
  `,
  `Palkia VStar
  Pokémon: 12
  3 Horsea BST 31
  2 Origin Forme Palkia V ASR 39
  2 Kingdra BST 33
  1 Horsea SHF 20
  1 Finneon LOR 40
  2 Origin Forme Palkia VSTAR ASR 40
  1 Radiant Greninja ASR 46
  1 Manaphy BRS 41
  1 Seel LOR 33
  2 Kingdra LOR 37
  2 Seadra LOR 36
  1 Dewgong LOR 34

  Trainer: 17
  1 Hisuian Heavy Ball ASR 146
  3 Candice SIT 152
  1 Escape Rope BST 125
  1 Level Ball BST 129
  1 Echoing Horn CRE 136
  4 Irida ASR 147
  1 Pal Pad SVI 182
  1 Nest Ball SVI 181
  4 Battle VIP Pass FST 225
  1 Melony CRE 146
  1 Klara CRE 145
  2 Lake Acuity LOR 160
  2 Boss's Orders BRS 132
  1 Energy Search CRZ 128
  2 Ultra Ball SVI 196
  1 Switch SVI 194
  3 Rare Candy SVI 191

  Energy: 1
  11 Basic {W} Energy SVE 3

  Total Cards: 60
  `,
  `Regieleki VMax
  Pokémon: 6
  1 Regieleki EVS 60
  3 Pachirisu SVI 68
  2 Regieleki VMAX SIT 58
  2 Regieleki V SIT 57
  4 Zeraora SIT 56
  1 Raikou V BRS 48

  Trainer: 10
  4 Ultra Ball SVI 196
  4 Professor's Research SVI 190
  2 Escape Rope BST 125
  1 Energy Recycler BST 124
  4 Electric Generator SVI 170
  4 Battle VIP Pass FST 225
  3 Leafy Camo Poncho SIT 160
  4 Nest Ball SVI 181
  4 Cynthia's Ambition BRS 138
  3 Boss's Orders BRS 132

  Energy: 1
  14 Basic {L} Energy SVE 4

  Total Cards: 60
  `,
  `Arcanine ex
  Pokémon: 10
  1 Charmeleon PGO 9
  3 Growlithe SVI 31
  1 Heatmor FST 41
  2 Bibarel BRS 121
  2 Charmander PGO 8
  3 Arcanine ex SVI 32
  1 Moltres BRS 21
  2 Bidoof CRZ 111
  2 Charizard PGO 10
  1 Radiant Charizard PGO 11

  Trainer: 13
  4 Ultra Ball SVI 196
  2 Raihan EVS 152
  4 Professor's Research SVI 190
  2 Escape Rope BST 125
  3 Rare Candy SVI 191
  2 Exp. Share SVI 174
  1 Defiance Band SVI 169
  1 Energy Search SVI 172
  1 Klara CRE 145
  3 Nest Ball SVI 181
  3 Arven SVI 166
  3 Magma Basin BRS 144
  2 Boss's Orders BRS 132

  Energy: 1
  11 Basic {R} Energy SVE 2

  Total Cards: 60
  `,
];

export default { lists };
