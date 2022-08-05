import React, { useContext, useEffect, useState } from 'react';
import CurrencySelector from '../components/CurrencySelector';
import ExchangeRatesList from '../components/ExchangeRatesList';

const ExchangeRatesPage = () => {
  const [baseCurrency, setBaseCurrency] = useState(null);

  return (
    <div>
      <CurrencySelector setBaseCurrency={setBaseCurrency} />
      <ExchangeRatesList baseCurrency={baseCurrency} />
    </div>
  );
};

export default ExchangeRatesPage;
