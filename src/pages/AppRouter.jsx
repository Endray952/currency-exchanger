import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ConverterPage from './ConverterPage';
import ExchangeRatesPage from './ExchangeRatesPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<ConverterPage />} />
      <Route path='/exchange' element={<ExchangeRatesPage />} />
    </Routes>
  );
};

export default AppRouter;
