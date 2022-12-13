import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../components/Card';
import { Info } from '../components/Info';
import AppContext from '../context';
import { useEmojis } from '../hook/useEmojis';

import styles from './Pages.module.scss';

const Favorites = ({ onAddToFavorites, onAddToCart }) => {
  const { favoriteItems } = useContext(AppContext);
  let navigate = useNavigate();
  const routeToHome = () => {
    navigate('/react-sneakers/');
  };
  const emoji = useEmojis();
  return (
    <div className={styles.content}>
      {favoriteItems.length > 0 ? (
        <>
          <div className={styles.headline}>
            <h1>Мои закладки</h1>
          </div>
          <div className={styles.cards}>
            {favoriteItems.map((item) => (
              <Card
                key={item.title}
                onClickFavorite={onAddToFavorites}
                onClickAdd={onAddToCart}
                {...item}
              />
            ))}
          </div>
        </>
      ) : (
        <div className='fillBlock'>
          <Info
            title={'Закладок нет'}
            description={'Вы не поставили сердечко ни для каких кроссовок'}
            handleInfoState={routeToHome}
            emoji={emoji}
          />
        </div>
      )}
    </div>
  );
};

export default Favorites;
