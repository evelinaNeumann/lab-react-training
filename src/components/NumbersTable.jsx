import React from 'react';

const NumbersTable = ({ limit }) => {
  const numbers = [];
  const rows = Math.ceil(limit / 5); // Calculate the number of rows

  for (let i = 1; i <= limit; i++) {
    numbers.push(
      <div
        key={i}
        style={{
          backgroundColor: i % 2 === 0 ? 'red' : 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
          border: '1px solid black',
          margin: '5px'
        }}
        className="number"
      >
        {i}
      </div>
    );
  }

  const rowsArray = [];
  for (let i = 0; i < rows; i++) {
    rowsArray.push(
      <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
        {numbers.slice(i * 5, (i + 1) * 5)}
      </div>
    );
  }

  return <div className="numbers-table">{rowsArray}</div>;
};

export default NumbersTable;
