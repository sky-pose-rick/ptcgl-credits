import React, { useState } from 'react';
import deckPricer from './logic/deckPricer';

function onSubmit(e, setPriceData) {
  e.preventDefault();
  console.log(e);
  const textarea = e.target.form[0];
  console.log(textarea.value);

  deckPricer.priceDeck(textarea.value).then((result) => {
    setPriceData(result);
  });
}

function App() {
  const [priceData, setPriceData] = useState({});

  return (
    <div className="App">
      <form>
        <textarea placeholder="Export your decklist here." />
        <button type="submit" onClick={(e) => { onSubmit(e, setPriceData); }}>Price your deck!</button>
      </form>
      {Number.isInteger(priceData.total)
      && (
      <div>
        <div>
          {priceData.cards.map((card, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index}>{card.name}</div>
          ))}
        </div>
        <div>
          Total:
          {' '}
          {priceData.total}
          {' '}
          Credits
        </div>
      </div>
      )}
    </div>
  );
}

export default App;
