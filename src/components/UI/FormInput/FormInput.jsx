import React from 'react';

import './FormInput.scss';

const FormInput = ({ onChange, value, name, type, label, className }) => {
  return (
    <div className={'form-input ' + className || ''}>
      <label className='form-input__label'>
        {label}
        <input
          className='form-input__input'
          type={type}
          value={value}
          onChange={onChange}
          name={name}
        />
      </label>
    </div>
  );
};

export default FormInput;
