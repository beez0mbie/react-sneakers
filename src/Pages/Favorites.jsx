import styles from './Pages.module.scss';
import Card from '../components/Card';
import { useContext } from 'react';
import AppContext from '../context';

const Favorites = ({ onAddToFavorites }) => {
  const { favoriteItems } = useContext(AppContext);
  return (
    <div className={styles.content}>
      <div className={styles.headline}>
        <h1>Мои закладки</h1>
      </div>
      <div className={styles.cards}>
        {favoriteItems.map((item) => (
          <Card
            key={item.title}
            onClickFavorite={onAddToFavorites}
            favorited
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
