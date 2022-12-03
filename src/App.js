import { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Overlay from './components/Overlay';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('https://6388c1b5d94a7e5040a6125c.mockapi.io/sneakers')
      .then((res) => {
        if (!res.ok) {
          throw Error('impossible to fetch sneakers from mockapi');
        }
        return res.json();
      })
      .then((res) => setItems(res));
  }, []);

  const handleCartState = () => setIsCartOpened(!isCartOpened);

  const onAddToCart = (obj) => {
    if (!cartItems.find((el) => el.title === obj.title)) {
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onDeleteToCart = (obj) => {
    setCartItems((prev) => {
      let remove = prev;
      let index = remove.findIndex((el) => el.title === obj.title);
      if (index > -1) {
        remove.splice(index, 1);
      }
      return remove;
    });
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className='wrapper'>
      {isCartOpened && (
        <Overlay
          items={cartItems}
          onCloseCart={handleCartState}
          onRemove={(obj) => onDeleteToCart(obj)}
        />
      )}

      <Header onClickCart={handleCartState} />

      <div className='content'>
        <div className='headline'>
          <h1>
            {searchValue
              ? `Поиск по фильтру "${searchValue}"`
              : 'Все Кроссовки'}
          </h1>
          <div className='search'>
            <img
              src='/img/search.svg'
              alt='Search'
            />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder='Поиск...'
            />
            <img
              className='clearSearch'
              src='/img/btn-remove.svg'
              alt='Clear'
              onClick={() => setSearchValue('')}
            />
          </div>
        </div>

        <div className='cards'>
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
                onClickPlus={(obj) => onAddToCart(obj)}
                onCheckedPlus={(obj) => onDeleteToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
