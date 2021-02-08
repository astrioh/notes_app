import React from 'react';
import './CenterCard.scss';

const CenterCard = (props) => {
  return (
    <div className='center-card'>
      <div className='center-card__card'>{props.children}</div>
    </div>
  );
};

export default CenterCard;
