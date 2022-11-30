import { useState } from 'react';
import styles from './Card.module.scss';

const Card = (props) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClickPlus = () => {
    setIsAdded(!isAdded);
  };
  const handleClickFavotite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src={
            isFavorite
              ? 'img/btn-heart-checked.svg'
              : '/img/btn-heart-unchecked.svg'
          }
          alt='Unchecked'
          onClick={handleClickFavotite}
        />
      </div>
      <img
        className={styles.sneakersImg}
        src={props.img}
        alt='sneakers'
      />
      <h5 className={styles.sneakersName}>{props.title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.price}>
          <span className={styles.priceText}>цена:</span>
          <b className={styles.priceCount}>{props.price} руб.</b>
        </div>
        <img
          className={styles.button}
          src={isAdded ? '/img/btn-plus-checked.svg' : '/img/btn-plus.svg'}
          alt='plus'
          onClick={handleClickPlus}
        />
      </div>
    </div>
  );
};

export default Card;
