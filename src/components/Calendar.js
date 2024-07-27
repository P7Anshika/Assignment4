import React from 'react';

const Calendar = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const date = new Date();

  return (
    <div>
      <h2>Calendar</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
        {days.map(day => <div key={day} style={{ border: '1px solid #ccc', padding: '5px' }}>{day}</div>)}
        {Array.from({ length: 30 }).map((_, index) => (
          <div key={index + 1} style={{ border: '1px solid #ccc', padding: '5px', textAlign: 'center' }}>
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
