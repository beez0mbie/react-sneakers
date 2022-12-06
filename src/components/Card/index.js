import { useState } from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Card.module.scss';

const Card = ({
  title,
  imgUrl,
  price,
  cartId,
  id,
  favorited = false,
  onClickFavorite,
  onAddToCart,
  onRemoveItem,
  loading,
}) => {
  const [isAdded, setIsAdded] = useState(cartId !== undefined);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const handleClickPlus = () => {
    isAdded ? onRemoveItem(cartId) : onAddToCart({ title, imgUrl, price });

    setIsAdded(!isAdded);
  };
  const handleClickFavotite = () => {
    onClickFavorite({ id, title, imgUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={210}
          height={224}
          viewBox='0 -10 210 224'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
        >
          <rect
            x='0'
            y='0'
            rx='10'
            ry='10'
            width='150'
            height='90'
          />
          <rect
            x='0'
            y='109'
            rx='5'
            ry='5'
            width='150'
            height='15'
          />
          <rect
            x='0'
            y='136'
            rx='5'
            ry='5'
            width='90'
            height='15'
          />
          <rect
            x='1'
            y='180'
            rx='5'
            ry='5'
            width='85'
            height='25'
          />
          <rect
            x='120'
            y='175'
            rx='10'
            ry='10'
            width='32'
            height='32'
          />
        </ContentLoader>
      ) : (
        <>
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
            src={imgUrl}
            alt='sneakers'
          />
          <h5 className={styles.sneakersName}>{title}</h5>
          <div className={styles.cardBottom}>
            <div className={styles.price}>
              <span className={styles.priceText}>цена:</span>
              <b className={styles.priceCount}>{price} руб.</b>
            </div>
            <img
              className={styles.button}
              src={isAdded ? '/img/btn-plus-checked.svg' : '/img/btn-plus.svg'}
              alt='plus'
              onClick={handleClickPlus}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
