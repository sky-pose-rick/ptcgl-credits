/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import CardRow from './CardRow';
import deckPricer from '../logic/deckPricer';
import ownedCards from '../logic/ownedCards';

function Pricer(props) {
  const { selling } = props;
  const [cards, setCards] = useState([]);
  const [total, setTotal] = useState(0);
  const [cardCount, setCardCount] = useState(0);
  const [listsAccepted, setListsAccepted] = useState(0);
  const [loading, setLoading] = useState(false);
  const [usdRate, setUSDRate] = useState(1600);

  const onSubmit = (e, priceDeck) => {
    e.preventDefault();
    // console.log(e);
    const textarea = e.target.form[0];
    // console.log(textarea.value);
    setLoading(true);

    priceDeck(textarea.value).then((result) => {
      if (result.cards.length > 0) {
        const updatedCards = ownedCards.adjustCraftingWithOwned(result.cards);
        setCards(updatedCards);
        // recompute total
        const updatedTotal = updatedCards.reduce((sum, card) => sum + card.totalCost, 0);
        setTotal(updatedTotal);
        setCardCount(result.cardCount);
        setListsAccepted(listsAccepted + 1);
      }
      setLoading(false);
    });
  };

  const onRequestCraft = (e) => {
    if (selling) {
      onSubmit(e, deckPricer.priceDeckSell);
    } else {
      onSubmit(e, deckPricer.priceDeckBuy);
    }
  };

  const updateTotal = (deck) => {
    let sum = 0;
    deck.forEach((card) => {
      sum += card.totalCost;
    });
    setTotal(sum);
  };

  const updateDeck = (index, updatedCard) => {
    setCards((state) => {
      const newDeck = state.map((card, i) => {
        if (i === index) {
          return updatedCard;
        }
        return card;
      });
      updateTotal(newDeck);
      return newDeck;
    });
  };

  const updateCardAmount = (index, value) => {
    const updatedCard = { ...cards[index] };
    updatedCard.toCraft = value;
    updatedCard.totalCost = updatedCard.toCraft * updatedCard.costPerCopy;
    updateDeck(index, updatedCard);
  };

  const updateCardCost = (index, value) => {
    const updatedCard = { ...cards[index] };
    updatedCard.costPerCopy = value;
    updatedCard.totalCost = updatedCard.toCraft * updatedCard.costPerCopy;
    updateDeck(index, updatedCard);
  };

  // update summary on re-render
  let summaryString = '';
  cards.forEach((card) => {
    if (card.totalCost > 0) {
      summaryString += `${card.toCraft}x ${card.name} ${card.set}${card.code} = ${card.totalCost}\n`;
    }
  });
  summaryString += `Total: ${total} Credits`;

  return (
    <div className="Pricer">
      <form>
        <textarea placeholder="Export your decklist here." rows="10" cols="30" />
        <button type="submit" disabled={loading} onClick={onRequestCraft}>
          {loading ? 'Loading...' : `${selling ? 'Sell' : 'Price'} your deck!`}
        </button>
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
              <div className="num-craft">{`Amount ${selling ? 'dusted' : 'to Craft'}`}</div>
              <div className="cost">{`${selling ? 'Credits' : 'Cost'} per Card`}</div>
              <div className="card-name">Card Name</div>
              <div className="total">{`Total Card ${selling ? 'Credits' : 'Cost'}`}</div>
            </div>
            {cards.map((card, index) => (
              <CardRow
                key={`${listsAccepted}-${index}`}
                card={card}
                updateCardAmount={(value) => {
                  updateCardAmount(index, value);
                }}
                updateCardCost={(value) => {
                  updateCardCost(index, value);
                }}
                selling={selling}
              />
            ))}
            <div className="CardRow">
              <div className="grid-filler">Total (Credits)</div>
              <div className="total">{total}</div>
            </div>
            <div className="CardRow">
              <div className="grid-filler">
                Total (USD, $1.00 =
                {' '}
                <input
                  type="number"
                  value={usdRate}
                  onChange={(e) => {
                    setUSDRate(e.target.value);
                  }}
                  className="rate-input"
                />
                {' '}
                Credits)
              </div>
              <div className="total">
                $
                {(total / usdRate).toFixed(2)}
              </div>
            </div>
          </div>
          {!selling && (
          <button
            type="button"
            onClick={() => {
              ownedCards.updateOwnedCounts(cards);
            }}
          >
            Save Owned Cards
          </button>
          )}
          <div className="summary">
            <div className="card-count">Summary</div>
            <textarea className="display-box" value={summaryString} readOnly rows="10" cols="30" />
          </div>
        </div>
        )}
    </div>
  );
}

export default Pricer;
