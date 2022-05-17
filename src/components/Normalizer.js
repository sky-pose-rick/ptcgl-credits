/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import deckNormalizer from '../logic/deckNormalizer';

function Normalizer() {
  const [cardCount, setCardCount] = useState(0);
  const [listsAccepted, setListsAccepted] = useState(0);
  const [loading, setLoading] = useState(false);
  const [decklist, setDecklist] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    const textarea = e.target.form[0];
    // console.log(textarea.value);
    setLoading(true);

    const normalizedDeck = deckNormalizer.normalizeDeck(textarea.value);
    setCardCount(normalizedDeck.cardCount);
    let combinedString = '';
    normalizedDeck.cards.forEach((card) => {
      combinedString += `${card}\n`;
    });
    setListsAccepted(listsAccepted + 1);
    setDecklist(combinedString);
    setLoading(false);
  };

  return (
    <div className="Pricer">
      <form>
        <textarea placeholder="Export your decklist here." rows="10" cols="30" />
        <button type="submit" disabled={loading} onClick={onSubmit}>
          Simplify Your Deck!
        </button>
      </form>
      {listsAccepted > 0
        && (
        <div>
          <div className="card-count">
            Cards Loaded:
            {' '}
            {cardCount}
          </div>
          <textarea key={`textarea-${listsAccepted}`} defaultValue={decklist} rows="10" cols="30" />
        </div>
        )}
    </div>
  );
}

export default Normalizer;
