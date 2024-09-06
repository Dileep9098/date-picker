
import React from 'react';
import { DateProvider } from './context/DateContext';
import DatePicker from './componants/DatePicker';

const App = () => {
  return (
    <DateProvider>
      <div className="container">
        <h1 className="mt-4">Recurring Date Picker</h1>
        <DatePicker />
      </div>
    </DateProvider>
  );
};

export default App;
