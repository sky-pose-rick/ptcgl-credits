/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const priceListBuy = [
  0,
  40,
  100,
  400,
  425,
  600,
  750,
  900,
  1025,
  1250,
  1600,
  2000,
];

const priceListSell = [
  0,
  10,
  20,
  100,
  125,
  150,
  250,
  300,
  375,
  600,
  900,
  1000,
];

function CardRow(props) {
  const {
    card, updateCardCost, updateCardAmount, selling,
  } = props;
  const [hasError, setHasError] = useState(card.notFound);
  const priceList = selling ? priceListSell : priceListBuy;

  const onChangeCost = (e) => {
    const newCost = e.target.value;
    updateCardCost(newCost);
    setHasError(false);
  };

  const onChangeAmount = (e) => {
    const newAmount = e.target.value;
    if (newAmount % 1 === 0 && newAmount >= 0 && newAmount < 60) {
      updateCardAmount(newAmount);
    }
  };

  return (
    <div className={`CardRow${hasError ? ' error-row' : ''}`}>
      <div className="num-list">
        {card.amount}
      </div>
      <div className="num-craft">
        <input type="number" value={card.toCraft} onChange={onChangeAmount} min="0" max="59" />
      </div>
      <div className="cost">
        <select value={card.costPerCopy} onChange={onChangeCost}>
          {
            priceList.map((price) => (
              <option
                key={price}
                value={price}
              >
                {price}
              </option>
            ))
          }
        </select>
      </div>
      <div className="card-name">
        {card.isEnergy
          ? `Basic ${card.name} Energy`
          : `${card.name} ${card.set} ${card.code}`}
        {card.redirect && <abbr title={card.redirect.name}>*</abbr>}
      </div>
      <div className="total">
        {card.totalCost}
      </div>
    </div>
  );
}

export default CardRow;
