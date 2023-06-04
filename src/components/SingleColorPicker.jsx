import React, { useState } from "react";

const SingleColorPicker = ({ color, value, onChange }) => {
  return (
    <div>
      <label htmlFor={`${color}Value`}>{color.toUpperCase()}:</label>
      <input
        type="number"
        id={`${color}Value`}
        value={value}
        min={0}
        max={255}
        onChange={onChange}
      />
    </div>
  );
};

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleRChange = (event) => {
    setRValue(Number(event.target.value));
  };

  const handleGChange = (event) => {
    setGValue(Number(event.target.value));
  };

  const handleBChange = (event) => {
    setBValue(Number(event.target.value));
  };

  return (
    <div>
      <SingleColorPicker color="r" value={rValue} onChange={handleRChange} />
      <SingleColorPicker color="g" value={gValue} onChange={handleGChange} />
      <SingleColorPicker color="b" value={bValue} onChange={handleBChange} />

      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
          marginTop: "10px",
        }}
      ></div>
    </div>
  );
};

export default RGBColorPicker;
