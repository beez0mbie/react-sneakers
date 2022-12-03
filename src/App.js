import axios from 'axios';
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
    axios
      .get('https://6388c1b5d94a7e5040a6125c.mockapi.io/sneakers')
      .then((res) => setItems(res.data));
  }, []);

  useEffect(() => {
    axios
      .get('https://6388c1b5d94a7e5040a6125c.mockapi.io/cart')
      .then((res) => setCartItems(res.data));
  }, [isCartOpened]);

  const onAddToCart = (obj) => {
    console.log(onAddToCart, obj);
    if (!cartItems.find((el) => el.title === obj.title)) {
      axios.post('https://6388c1b5d94a7e5040a6125c.mockapi.io/cart', obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    console.log('onDeleteToCart', id);
    axios.delete(`https://6388c1b5d94a7e5040a6125c.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCartState = () => setIsCartOpened(!isCartOpened);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className='wrapper'>
      {isCartOpened && (
        <Overlay
          items={cartItems}
          onCloseCart={handleCartState}
          onRemove={(id) => onRemoveItem(id)}
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
              value={searchValue} //контролируемый инпут
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
                onCheckedPlus={() => console.log('Need to do')}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
