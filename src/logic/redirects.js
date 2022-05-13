// try to catch any newer varieties of cards that are owned in starter decks
const rclBoss = {
  target: 'swsh2-154',
  name: 'Boss\'s Orders RCL 154',
};

const sshResearch = {
  target: 'swsh1-178',
  name: 'Professor\'s Research SSH 178',
};

const cards = {
  // CPA marnie -> SSH marnie
  'swsh35-56': {
    target: 'swsh1-169',
    name: 'Marnie SSH 169',
  },
  // FST quickball -> SSH quickball
  'swsh8-237': {
    target: 'swsh1-179',
    name: 'Quick Ball SSH 179',
  },
  // several boss's orders
  'swsh45-58': rclBoss,
  'swsh9-132': rclBoss,

  // several professor's researches
  'swsh35-62': sshResearch,
  'swsh45-60': sshResearch,
  'cel25-23': sshResearch,
  'swsh9-147': sshResearch,

  // more minor CPA reprints
  // skip non-starter cards
  'swsh35-52': {
    target: 'swsh1-164',
    name: 'Great Ball SSH 164',
  },

  'swsh35-54': {
    target: 'swsh1-166',
    name: 'Hyper Potion SSH 166',
  },

  'swsh35-61': {
    target: 'swsh1-164',
    name: 'Potion SSH 177',
  },

  'swsh45-44': {
    target: 'swsh3-104',
    name: 'Crobat V',
  },

  // TODO: BW energy search is a common, try to set up another redirect
};

export default { cards };
