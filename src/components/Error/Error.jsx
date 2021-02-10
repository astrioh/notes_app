import React from 'react';

import './Error.scss';

const Error = ({ text, className }) => {
  return <div className={'error ' + className || ''}>{text}</div>;
};

export default Error;
