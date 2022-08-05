import React from 'react';
import { useEffect, useRef, useState, useContext } from 'react';
import Select from 'react-select';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ConverterPage from './pages/ConverterPage';
import ExchangeRatesPage from './pages/ExchangeRatesPage';
import './App.css';
import AppRouter from './pages/AppRouter';
import NavBar from './components/NavBar/NavBar';

export const ExchangeRatesContext = React.createContext();

function App() {
  const [exchangeRates, setExchangeRates] = useState(null);

  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/latest.js')
      .then((response) => response.json())
      .then((jsonData) => {
        const mappedData = new Map(Object.entries(jsonData.rates));
        mappedData.set('RUB', 1);
        setExchangeRates(mappedData);
        console.log(exchangeRates);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ExchangeRatesContext.Provider value={exchangeRates}>
      <div id='content'>
        <NavBar />
        <AppRouter />
      </div>
    </ExchangeRatesContext.Provider>
  );
}

export default App;
