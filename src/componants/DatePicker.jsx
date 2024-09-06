import React, { useEffect, useState } from 'react';
import { useDate } from '../context/DateContext';
import { calculateRecurringDates } from '../utils/dateUtils'; 
import Calendar from './Calender';
import './DatePicker.css'; 

const DatePicker = () => {
  const {
    recurrencePattern,
    frequency,
    startDate,
    endDate,
    setRecurrencePattern,
    setFrequency,
    setStartDate,
    setEndDate,
  } = useDate();
  
  const [recurringDates, setRecurringDates] = useState([]);

  useEffect(() => {
    if (startDate && endDate) {
      const dates = calculateRecurringDates(startDate, endDate, recurrencePattern, frequency);
      setRecurringDates(dates);
    }
  }, [recurrencePattern, frequency, startDate, endDate]);

  const handlePatternChange = (e) => setRecurrencePattern(e.target.value);
  const handleFrequencyChange = (e) => setFrequency(e.target.value);
  const handleStartDateChange = (e) => setStartDate(e.target.value);
  const handleEndDateChange = (e) => setEndDate(e.target.value);

  return (
    <div className="container mt-4">
      <div className="form-group">
        <label htmlFor="recurrencePattern">Recurrence Pattern</label>
        <select
          id="recurrencePattern"
          value={recurrencePattern}
          onChange={handlePatternChange}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="frequency">Every X</label>
        <input
          id="frequency"
          type="number"
          value={frequency}
          onChange={handleFrequencyChange}
          min="1"
        />
      </div>

      <div className="form-group">
        <label htmlFor="startDate">Start Date</label>
        <input
          id="startDate"
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="endDate">End Date</label>
        <input
          id="endDate"
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>

      <Calendar dates={recurringDates} />
    </div>
  );
};

export default DatePicker;
