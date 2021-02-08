import React from 'react';

import './Button.scss';

const Button = ({ children, onClick, className, submit }) => {
  const btnProps = {
    onClick: onClick,
    className: 'button ' + className || '',
    type: submit ? 'submit' : '',
  };
  return <button {...btnProps}>{children}</button>;
};

export default Button;
