import React, { useState } from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import CardRow from './components/CardRow';
import deckPricer from './logic/deckPricer';

function App() {
  const [cards, setCards] = useState({});
  const [total, setTotal] = useState(0);
  const [cardCount, setCardCount] = useState(0);
  const [listsAccepted, setListsAccepted] = useState(0);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e, priceDeck) => {
    e.preventDefault();
    // console.log(e);
    const textarea = e.target.form[0];
    // console.log(textarea.value);
    setLoading(true);

    priceDeck(textarea.value).then((result) => {
      if (result.cards.length > 0) {
        setCards(result.cards);
        setTotal(result.total);
        setCardCount(result.cardCount);
        setListsAccepted(listsAccepted + 1);
      }
      setLoading(false);
    });
  };

  const onRequestCraft = (e) => {
    onSubmit(e, deckPricer.priceDeckBuy);
  };

  const onRequestSell = (e) => {
    onSubmit(e, deckPricer.priceDeckSell);
  };

  const adjustGrandTotal = (diff) => {
    setTotal((prev) => prev + diff);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <h1>PTCGL Deck Pricer</h1>
        <form>
          <textarea placeholder="Export your decklist here." rows="10" cols="30" />
          <Routes>
            <Route
              path="/ptcgl-credits/sell"
              element={
                <button type="submit" disabled={loading} onClick={onRequestSell}>{ loading ? 'Loading...' : 'Sell your deck!'}</button>
            }
            />
            <Route
              path="*"
              element={
                <button type="submit" disabled={loading} onClick={onRequestCraft}>{ loading ? 'Loading...' : 'Price your deck!'}</button>
            }
            />
          </Routes>
        </form>
        {listsAccepted > 0
        && (
        <div className="price-display">
          <div className="card-count">
            Cards Loaded:
            {' '}
            {cardCount}
          </div>
          <div className="price-table">
            <div className="CardRow table-header">
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
        <footer>
          Card searching provided by
          {' '}
          <a href="https://pokemontcg.io/">pokemontcg.io</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
