import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Pages/Home';
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
    axios
      .get('https://6388c1b5d94a7e5040a6125c.mockapi.io/cart')
      .then((res) => setCartItems(res.data));
  }, []);

  const onAddToCart = (obj) => {
    console.log(onAddToCart, obj);
    if (!cartItems.find((el) => el.title === obj.title)) {
      axios
        .post('https://6388c1b5d94a7e5040a6125c.mockapi.io/cart', obj)
        .then(() =>
          axios
            .get('https://6388c1b5d94a7e5040a6125c.mockapi.io/cart')
            .then((res) => setCartItems(res.data)),
        );
    }
  };

  const onRemoveItem = (id) => {
    if (id === undefined) return;
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
      <Home
        items={items}
        cartItems={cartItems}
        onAddToCart={onAddToCart}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onChangeSearchInput={onChangeSearchInput}
        onRemoveItem={onRemoveItem}
      />
    </div>
  );
}

export default App;
