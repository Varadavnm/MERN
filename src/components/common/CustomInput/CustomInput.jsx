import React from 'react';
import './CustomInput.css';

function CustomInput({ type, value, onBlur, onChange, label, name }) {
  return (
    <div className='common-input-box'>
      <div>
        <input
          type={type}
          required
          className='common-input'
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name} // Make sure to include the 'name' attribute for form submission
        />
        <label htmlFor={name}>{label}</label>
      </div>
    </div>
  );
}

export default CustomInput;
