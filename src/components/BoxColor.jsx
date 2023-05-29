import React from 'react';

function BoxColor(props) {
  const { r, g, b } = props;

  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: '200px',
    height: '100px',
    margin: '10px',
  };

  return <div style={boxStyle}></div>;
}

export default BoxColor;
