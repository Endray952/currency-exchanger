import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ExchangeRatesContext } from '../App';

const ExchangeRatesList = ({ baseCurrency }) => {
  const exchangeRatesRUB = useContext(ExchangeRatesContext);
  const [exchangeRates, setExchangeRates] = useState(null);

  useEffect(() => {
    toBaseCurrency(baseCurrency, exchangeRatesRUB, setExchangeRates);
  }, [baseCurrency]);

  if (!baseCurrency || !exchangeRates) return null;

  return (
    <div style={{ display: 'flex' }}>
      <ul
        style={{
          listStyleType: 'none',
          margin: 'auto',
          marginTop: '20px',
          padding: '0',
          fontSize: '20px',
        }}
      >
        {Array.from(exchangeRates).map((pair) => {
          return (
            <li key={pair[0]}>{`1 ${baseCurrency} = ${pair[1].toFixed(3)} ${
              pair[0]
            }`}</li>
          );
        })}
      </ul>
    </div>
  );
};

function toBaseCurrency(baseCurrency, exchangeRatesRUB, setExchangeRates) {
  if (!baseCurrency || !exchangeRatesRUB) return;
  const exchangeRates = new Map();
  const base = exchangeRatesRUB.get(baseCurrency);
  for (const [currencyName, value] of exchangeRatesRUB) {
    const newRate = value / base;
    exchangeRates.set(currencyName, newRate);
  }
  setExchangeRates(exchangeRates);
}

export default ExchangeRatesList;
