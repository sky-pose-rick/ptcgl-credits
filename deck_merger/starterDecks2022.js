const lists = [
  `RS Malamar
  Pokémon: 7
  4 Inkay CRE 69
  4 Remoraid BST 36
  4 Malamar CRE 70
  4 Octillery BST 37
  1 Crobat V DAA 104
  2 Minccino SSH 145
  2 Cinccino SSH 147
  
  Trainer: 11
  3 Tower of Waters BST 138
  2 Bruno BST 121
  4 Level Ball BST 129
  4 Korrina's Focus BST 128
  1 Pokémon Catcher SSH 175
  2 Ordinary Rod SSH 171
  4 Quick Ball SSH 179
  4 Great Ball SSH 164
  4 Professor's Research SSH 178
  4 Evolution Incense SSH 163
  1 Scoop Up Net RCL 165
  
  Energy: 2
  4 Spiral Energy CRE 159
  2 Basic {P} Energy Energy 40
  Total Cards: 60`,

  `Decidueye Inteleon
  Pokémon: 8
  2 Dartrix DAA 12
  3 Inteleon CRE 43
  1 Inteleon SSH 58
  4 Decidueye DAA 13
  4 Sobble CRE 41
  4 Drizzile SSH 56
  4 Rowlet DAA 11
  1 Snorlax VIV 131
  
  Trainer: 12
  1 Bird Keeper DAA 159
  4 Marnie SSH 169
  2 Scoop Up Net RCL 165
  1 Raihan EVS 152
  1 Quick Ball SSH 179
  3 Professor's Research SSH 178
  4 Rare Candy SSH 180
  4 Level Ball BST 129
  1 Tool Jammer BST 136
  1 Energy Search SSH 161
  2 Boss's Orders RCL 154
  4 Evolution Incense SSH 163
  
  Energy: 3
  5 Basic {G} Energy Energy 45
  3 Capture Energy RCL 171
  1 Basic {W} Energy Energy 47
  Total Cards: 60`,

  `Zacian Zamazenta
  Pokémon: 7
  2 Zamazenta V SSH 139
  2 Zacian V SSH 138
  2 Oranguru SSH 148
  2 Galarian Perrserker SSH 128
  2 Galarian Meowth RCL 126
  1 Dialga VIV 121
  1 Crobat V DAA 104
  
  Trainer: 11
  2 Cape of Toughness DAA 160
  2 Bird Keeper DAA 159
  2 Pokégear 3.0 SSH 174
  1 Ordinary Rod SSH 171
  4 Metal Saucer SSH 170
  4 Switch SSH 183
  3 Air Balloon SSH 156
  4 Quick Ball SSH 179
  4 Professor's Research SSH 178
  4 Marnie SSH 169
  3 Boss's Orders RCL 154
  
  Energy: 2
  3 Coating {M} Energy VIV 163
  12 Basic {M} Energy Energy 43
  Total Cards: 60`,

  `Blissey V
  Pokémon: 2
  2 Dunsparce FST 207
  4 Blissey V CRE 119
  
  Trainer: 11
  4 Pokégear 3.0 SSH 174
  4 Potion SSH 177
  4 Cape of Toughness DAA 160
  3 Allister VIV 146
  4 Lucky Ice Pop EVS 150
  4 Professor's Research SSH 178
  3 Path to the Peak CRE 148
  4 Suspicious Food Tin CPA 66
  2 Zinnia's Resolve EVS 164
  4 Hyper Potion SSH 166
  2 Boss's Orders RCL 154
  
  Energy: 4
  4 Basic {P} Energy Energy 40
  4 Powerful {C} Energy DAA 176
  4 Capture Energy RCL 171
  4 Lucky Energy CRE 158
  Total Cards: 60`,

  `Inteleon VMax
  Pokémon: 8
  2 Inteleon V RCL 49
  1 Oranguru SSH 148
  3 Snom SSH 63
  2 Inteleon VMAX RCL 50
  3 Frosmoth SSH 64
  1 Snorlax VIV 131
  2 Suicune DAA 37
  1 Crobat V DAA 104
  
  Trainer: 14
  1 Training Court RCL 169
  2 Bird Keeper DAA 159
  2 Telescopic Sight VIV 160
  1 Ordinary Rod SSH 171
  2 Switch SSH 183
  2 Air Balloon SSH 156
  4 Quick Ball SSH 179
  3 Great Ball SSH 164
  4 Professor's Research SSH 178
  1 Energy Retrieval SSH 160
  3 Evolution Incense SSH 163
  3 Marnie SSH 169
  2 Capacious Bucket RCL 156
  3 Boss's Orders RCL 154
  
  Energy: 1
  12 Basic {W} Energy Energy 38
  Total Cards: 60`,

  `RS Urshifu
  Pokémon: 11
  1 Octillery BST 37
  2 Rapid Strike Urshifu V BST 87
  1 Falinks BST 83
  3 Inteleon CRE 43
  1 Inteleon SSH 58
  2 Rapid Strike Urshifu VMAX BST 88
  1 Crobat V DAA 104
  1 Passimian CRE 88
  1 Remoraid BST 36
  4 Sobble CRE 41
  4 Drizzile SSH 56
  
  Trainer: 13
  1 Ordinary Rod SSH 171
  3 Marnie SSH 169
  2 Raihan EVS 152
  4 Quick Ball SSH 179
  4 Professor's Research SSH 178
  1 Telescopic Sight VIV 160
  2 Escape Rope BST 125
  2 Air Balloon SSH 156
  4 Level Ball BST 129
  1 Energy Search SSH 161
  2 Boss's Orders RCL 154
  1 Tower of Waters BST 138
  4 Evolution Incense SSH 163
  
  Energy: 2
  4 Basic {F} Energy Energy 41
  4 Rapid Strike Energy BST 140
  Total Cards: 60`,

  `SR Calyrex
  Pokémon: 5
  2 Galarian Articuno EVS 63
  2 Shadow Rider Calyrex V CRE 74
  4 Cresselia CRE 64
  1 Crobat V DAA 104
  2 Shadow Rider Calyrex VMAX CRE 75
  
  Trainer: 11
  2 Ordinary Rod SSH 171
  4 Marnie SSH 169
  4 Fog Crystal CRE 140
  4 Quick Ball SSH 179
  4 Professor's Research SSH 178
  2 Switch SSH 183
  2 Air Balloon SSH 156
  4 Training Court RCL 169
  2 Great Ball SSH 164
  3 Boss's Orders RCL 154
  3 Evolution Incense SSH 163
  
  Energy: 1
  15 Basic {P} Energy Energy 40
  Total Cards: 60`,

  `Suicune V
  Pokémon: 11
  1 Galarian Zigzagoon SSH 117
  1 Altaria EVS 106
  1 Pumpkaboo EVS 76
  1 Swablu CPA 48
  3 Lombre RCL 8
  3 Ludicolo EVS 34
  2 Suicune V EVS 31
  4 Lotad EVS 32
  1 Ice Rider Calyrex V CRE 45
  1 Ice Rider Calyrex VMAX CRE 46
  1 Crobat V DAA 104
  
  Trainer: 15
  1 Raihan EVS 152
  2 Cape of Toughness DAA 160
  1 Zinnia's Resolve EVS 164
  3 Level Ball BST 129
  1 Bird Keeper DAA 159
  3 Melony CRE 146
  1 Ordinary Rod SSH 171
  2 Air Balloon SSH 156
  4 Quick Ball SSH 179
  2 Professor's Research SSH 178
  3 Evolution Incense SSH 163
  3 Marnie SSH 169
  1 Capacious Bucket RCL 156
  2 Boss's Orders RCL 154
  2 Scoop Up Net RCL 165
  
  Energy: 2
  3 Capture Energy RCL 171
  7 Basic {W} Energy Energy 38
  Total Cards: 60`,
];

export default { lists };
