import Card from '../Card';
import styles from './Home.module.scss';

const Home = ({
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  items,
  onAddToCart,
  cartItems,
  onRemoveItem,
}) => {
  const matItemToCart = new Map();
  for (const cartItem of cartItems) {
    const found = items.find((item) => item.title === cartItem.title);
    matItemToCart.set(found, cartItem);
  }
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

      <div className={styles.cards}>
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
          )
          .map((item) => (
            <Card
              key={item.title}
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              onClickFavorite={() => console.log('click favorite')}
              onAddToCart={onAddToCart}
              onRemoveItem={onRemoveItem}
              cartId={matItemToCart.get(item)?.id}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
