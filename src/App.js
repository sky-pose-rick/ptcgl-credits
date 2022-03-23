import React, { useState } from 'react';
import CardRow from './components/CardRow';
import deckPricer from './logic/deckPricer';

function App() {
  const [cards, setCards] = useState({});
  const [total, setTotal] = useState(0);
  const [listsAccepted, setListsAccepted] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    const textarea = e.target.form[0];
    // console.log(textarea.value);

    deckPricer.priceDeck(textarea.value).then((result) => {
      if (result.cards.length > 0) {
        setCards(result.cards);
        setTotal(result.total);
        setListsAccepted(listsAccepted + 1);
      }
    });
  };

  const adjustGrandTotal = (diff) => {
    setTotal((prev) => prev + diff);
  };

  return (
    <div className="App">
      <h1>PTCGL Deck Pricer</h1>
      <form>
        <textarea placeholder="Export your decklist here." rows="10" cols="30" />
        <button type="submit" onClick={onSubmit}>Price your deck!</button>
      </form>
      {listsAccepted > 0
      && (
      <div>
        <div className="price-table">
          <div className="CardRow">
            <div className="num-list">Amount</div>
            <div className="num-craft">Amount to Craft</div>
            <div className="cost">Cost Per Card</div>
            <div className="card-name">Card Name</div>
            <div className="total">Total Card Cost</div>
          </div>
          {cards.map((card, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <CardRow key={`${listsAccepted}-${index}`} card={card} adjustGrandTotal={adjustGrandTotal} />
          ))}
          <div className="CardRow">
            <div className="grid-filler">Total (Credits)</div>
            <div className="total">{total}</div>
          </div>
          <div className="CardRow">
            <div className="grid-filler">Total (USD, $1.00 = 1600 Credits)</div>
            <div className="total">
              $
              {(total / 1600).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default App;
