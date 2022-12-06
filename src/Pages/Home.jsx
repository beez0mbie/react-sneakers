import Card from '../components/Card';
import styles from './Pages.module.scss';

const Home = ({
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  items,
  onAddToFavorites,
  onAddToCart,
  cartItems,
  onRemoveItem,
  isLoading,
}) => {
  const matItemToCart = new Map();

  for (const cartItem of cartItems) {
    const found = items.find((item) => item.title === cartItem.title);
    matItemToCart.set(found, cartItem);
  }

  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );

    return (isLoading ? [...Array(10)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        onClickFavorite={onAddToFavorites}
        onAddToCart={onAddToCart}
        onRemoveItem={onRemoveItem}
        cartId={matItemToCart.get(item)?.id}
        loading={isLoading}
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
