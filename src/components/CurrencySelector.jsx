import React, { useMemo, useContext, useRef, useEffect, useState } from 'react';
import Select from 'react-select';
import { ExchangeRatesContext } from '../App';

const CurrencySelector = ({ setBaseCurrency }) => {
  const exchangeRates = useContext(ExchangeRatesContext);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setCurrencies(exchangeRates, setOptions);
  }, [exchangeRates]);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '180px', margin: 'auto', marginTop: '20px' }}>
        <Select
          placeholder={'Set base currency'}
          options={options}
          onChange={(e) => setBaseCurrency(e.label)}
        />
      </div>
    </div>
  );
};

function setCurrencies(exchangeRates, setOptions) {
  if (!exchangeRates) return [];

  const options = [];
  exchangeRates.forEach((value, key) => {
    options.push({ value, label: key });
  });

  setOptions(options);
}
export default CurrencySelector;
