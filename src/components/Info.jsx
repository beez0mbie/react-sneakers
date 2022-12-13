import React from 'react';
import AppContext from '../context';

export const Info = ({ title, description, image }) => {
  const { handleCartState } = React.useContext(AppContext);

  return (
    <div className='emptyCart'>
      <img
        className='emptyCartImage'
        src={image}
        alt='EmptyCart'
      />
      <div>
        <h3 className='eptyCartTitle'>{title}</h3>
        <p className='eptyCartText'>{description}</p>
      </div>
      <button
        onClick={handleCartState}
        className='greenButton'
      >
        Вернуться назад
        <img
          src='img/arrow-left.svg'
          alt='Arrow'
          className='arrowImg'
        />
      </button>
    </div>
  );
};
