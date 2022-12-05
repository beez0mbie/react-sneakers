import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import Overlay from './components/Overlay';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios
      .get('https://6388c1b5d94a7e5040a6125c.mockapi.io/sneakers')
      .then((res) => setItems(res.data));

    axios
      .get('https://6388c1b5d94a7e5040a6125c.mockapi.io/cart')
      .then((res) => setCartItems(res.data));

    axios
      .get('https://6388c1b5d94a7e5040a6125c.mockapi.io/favorite')
      .then((res) => setFavoriteItems(res.data));
  }, []);

  const onAddToCart = async (obj) => {
    try {
      if (!cartItems.find((el) => el.title === obj.title)) {
        const { data } = await axios.post(
          'https://6388c1b5d94a7e5040a6125c.mockapi.io/cart',
          obj,
        );
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      throw Error(`Impossible to add to Cart: ${error.message}`);
    }
  };

  const onAddToFavorites = async (obj) => {
    try {
      if (favoriteItems.find((item) => item.id === obj.id)) {
        axios.delete(
          `https://6388c1b5d94a7e5040a6125c.mockapi.io/favorite/${obj.id}`,
        );
        setFavoriteItems((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          'https://6388c1b5d94a7e5040a6125c.mockapi.io/favorite',
          obj,
        );
        setFavoriteItems((prev) => [...prev, data]);
      }
    } catch (error) {
      throw Error(`Impossible to add to favorites ${error.message}`);
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

      <Routes>
        <Route
          path='/'
          element={
            <Home
              items={items}
              cartItems={cartItems}
              onAddToCart={onAddToCart}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onRemoveItem={onRemoveItem}
              onAddToFavorites={onAddToFavorites}
            />
          }
        />
        <Route
          path='favorites/*'
          element={
            <Favorites
              items={favoriteItems}
              onAddToFavorites={onAddToFavorites}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
