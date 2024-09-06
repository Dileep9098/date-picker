import React, { createContext, useState, useContext } from 'react';

const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [recurrencePattern, setRecurrencePattern] = useState('daily');
  const [frequency, setFrequency] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <DateContext.Provider
      value={{
        recurrencePattern,
        frequency,
        startDate,
        endDate,
        setRecurrencePattern,
        setFrequency,
        setStartDate,
        setEndDate,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

export const useDate = () => useContext(DateContext);
