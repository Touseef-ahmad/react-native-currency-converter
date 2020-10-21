import React, { useState, createContext } from 'react';
import { propTypes } from './prop-types';

export const ConversionContext = createContext();

export const ConversionContextProvider = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [quoteCurrency, setQuoteCurrency] = useState('GBP');
  const [conversionRate, setConversionRate] = useState(165.72);
  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
    setConversionRate(1 / conversionRate);
  };
  const contextValue = {
    baseCurrency,
    conversionRate,
    quoteCurrency,
    setBaseCurrency,
    setConversionRate,
    setQuoteCurrency,
    swapCurrencies,
  };
  return <ConversionContext.Provider value={contextValue}>{children}</ConversionContext.Provider>;
};

ConversionContextProvider.propTypes = propTypes;
