import React from "react";
import "./switch-button.scss";

const SwitchButton = ({ onChange, checked }) => {
  return (
    <label className='switch'>
      <input type="checkbox" onChange={(e) => onChange(e)} checked={checked} />
      <span className={`switch-btn-slider round`}></span>
    </label>
  );
};

export default SwitchButton;
