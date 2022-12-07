import Card from '../components/Card';
import styles from './Pages.module.scss';
import { useContext } from 'react';
import AppContext from '../context';

const Home = ({
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorites,
  onAddToCart,
  isLoading,
}) => {
  const { items, cartItems, favoriteItems } = useContext(AppContext);

  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );

    // bug state with rerender after load [...Array(10)]
    return (false ? [...Array(10)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        onClickFavorite={onAddToFavorites}
        onClickAdd={onAddToCart}
        loading={isLoading}
        favorited={favoriteItems.some(
          (favItem) => favItem.title === item.title,
        )}
        added={
          cartItems.some((cartItem) => cartItem.title === item.title)
        }
        {...item}
      />
    ));
  };
  return (
    <div className={styles.content}>
      <div className={styles.headline}>
        <h1>
          {searchValue ? `Поиск по фильтру "${searchValue}"` : 'Все Кроссовки'}
        </h1>
        <div className={styles.search}>
          <img
            src='/img/search.svg'
            alt='Search'
          />
          <input
            onChange={onChangeSearchInput}
            value={searchValue} //контролируемый инпут
            placeholder='Поиск...'
          />
          <img
            className={styles.clearSearch}
            src='/img/btn-remove.svg'
            alt='Clear'
            onClick={() => setSearchValue('')} //контролируемый инпут
          />
        </div>
      </div>

      <div className={styles.cards}>{renderItems()}</div>
    </div>
  );
};

export default Home;
