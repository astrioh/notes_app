import React from 'react';

import './Button.scss';

const Button = ({ children, onClick, className, submit, disabled }) => {
  const btnProps = {
    onClick,
    className: 'button ' + className || '',
    type: submit ? 'submit' : '',
    disabled,
  };
  return <button {...btnProps}>{children}</button>;
};

export default Button;
