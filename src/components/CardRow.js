/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const priceList = [
  0,
  40,
  100,
  400,
  425,
  600,
  750,
  900,
  1025,
  1600,
  2000,
];

function CardRow(props) {
  const { card, adjustGrandTotal } = props;
  const [costPerCopy, setCostPerCopy] = useState(card.costPerCopy);
  const [amount, setAmount] = useState(card.toCraft);
  const [hasError, setHasError] = useState(card.notFound);
  const totalCost = costPerCopy * amount;

  const onChangeCost = (e) => {
    const newCost = e.target.value;
    adjustGrandTotal((newCost - costPerCopy) * amount);
    setCostPerCopy(newCost);
    setHasError(false);
  };

  const onChangeAmount = (e) => {
    const newAmount = e.target.value;
    if (newAmount % 1 === 0 && newAmount >= 0 && newAmount < 60) {
      adjustGrandTotal((newAmount - amount) * costPerCopy);
      setAmount(newAmount);
    }
  };

  return (
    <div className={`CardRow${hasError ? ' error-row' : ''}`}>
      <div className="num-list">
        {card.amount}
      </div>
      <div className="num-craft">
        <input type="number" value={amount} onChange={onChangeAmount} min="0" max="59" />
      </div>
      <div className="cost">
        <select defaultValue={costPerCopy} onChange={onChangeCost}>
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
        {totalCost}
      </div>
    </div>
  );
}

export default CardRow;
