import React from 'react';
import './Calendar.css'; 

const Calendar = ({ dates }) => {
  return (
    <div className="calendar-container">
      <h3>Calendar Preview</h3>
      {dates.length > 0 ? (
        <div className="calendar-flex-container">
          {dates.map((date, index) => (
            <div key={index} className="calendar-item">{date}</div>
          ))}
        </div>
      ) : (
        <p>No dates available.</p>
      )}
    </div>
  );
};

export default Calendar;
