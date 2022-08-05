import React, { useContext, useState } from 'react';
import './ConverterInput.css';
import { ExchangeRatesContext } from '../../App';

const ConverterInput = () => {
  const [userInput, setUserInput] = useState('');
  const [converted, setConverted] = useState('');
  const exchangeRatesRUB = useContext(ExchangeRatesContext);

  const onConvert = () => {
    if (!exchangeRatesRUB) return;
    const convertedValue = convertFromInput(userInput, exchangeRatesRUB);
    setConverted(convertedValue);
  };

  return (
    <div className='converter-input'>
      <input
        placeholder='Example: 15 rub in usd'
        className='input'
        type='text'
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button className='btn' onClick={onConvert}>
        Convert!
      </button>
      <div className='convertetValue'>{`${converted?.value} ${
        converted?.targetCurrency?.toUpperCase()
          ? converted.targetCurrency.toUpperCase()
          : ''
      }`}</div>{' '}
    </div>
  );
};

function convertFromInput(input, exchangeRatesRUB) {
  const [baseValue, baseCurrency, _, targetCurrency] = input.split(' ');

  const baseCurrencyRate = exchangeRatesRUB.get(baseCurrency?.toUpperCase());
  const targetCurrencyRate = exchangeRatesRUB.get(
    targetCurrency?.toUpperCase()
  );
  if (
    baseValue == undefined ||
    baseCurrency == undefined ||
    targetCurrency == undefined ||
    !isNumeric(baseValue) ||
    baseCurrencyRate == undefined ||
    targetCurrencyRate == undefined
  ) {
    return { value: 'error' };
  }

  return {
    value: (baseValue * (targetCurrencyRate / baseCurrencyRate)).toFixed(4),
    targetCurrency: targetCurrency,
  };
}

function isNumeric(str) {
  if (typeof str != 'string') return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}

export default ConverterInput;
