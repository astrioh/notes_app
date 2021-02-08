import React from 'react';
import './CenterCard.scss';

const CenterCard = (props) => {
  return (
    <div className='center-card'>
      <div className={'center-card__card ' + props.className || ''}>
        {props.children}
      </div>
    </div>
  );
};

export default CenterCard;
