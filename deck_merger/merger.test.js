import deckParser from '@sky-pose-rick/ptcgl-parser';
import deckMerger from './merger';

describe('object output', () => {
  const getLists = () => {
    const list1 = `3 Professor's Research SSH 178
    4 Rare Candy SSH 180
    4 Level Ball BST 129`;

    const list2 = `3 Air Balloon SSH 156
    4 Quick Ball SSH 179
    4 Professor's Research SSH 178`;

    const list3 = `2 Inteleon V RCL 49
    1 Oranguru SSH 148
    3 Snom SSH 63`;

    return [list1, list2, list3];
  };

  it('4 researches accross 3 lists', () => {
    const lists = getLists();
    const merged = deckMerger.mergeLists(lists);
    // console.log(deckParser.parseRow('3 Professor\'s Research SSH 178'));
    // eslint-disable-next-line dot-notation
    const research = merged['swsh1-178'];
    expect(research.amount).toEqual('4');
    expect(research.set).toEqual('SSH');
    expect(research.code).toEqual('178');
    expect(research.cost).toEqual('0');
  });
});

describe('string output', () => {
  it.todo('test the output');
});
