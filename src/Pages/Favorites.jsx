import styles from './Pages.module.scss';
import Card from '../components/Card';

const Favorites = ({ items = [], onAddToFavorites }) => {
  return (
    <div className={styles.content}>
      <div className={styles.headline}>
        <h1>Мои закладки</h1>
      </div>
      <div className={styles.cards}>
        {items.map((item) => (
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
