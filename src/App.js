import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Overlay from './components/Overlay';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import Orders from './Pages/Orders';
import AppContext from './context';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [itemsResponse, cartResponse, favoriteItems] = await Promise.all([
          axios.get('https://6388c1b5d94a7e5040a6125c.mockapi.io/sneakers'),
          axios.get('https://6388c1b5d94a7e5040a6125c.mockapi.io/cart'),
          axios.get('https://6388c1b5d94a7e5040a6125c.mockapi.io/favorite'),
        ]);

        setIsLoading(false);

        setCartItems(cartResponse.data);
        setFavoriteItems(favoriteItems.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Error when get data from server');
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const modifyCart = async (obj) => {
    try {
      const found = cartItems.find((item) => item.title === obj.title);
      if (found) {
        console.log('onDeleteToCart', found.id);
        setCartItems((prev) => prev.filter((item) => item.id !== found.id));
        await axios.delete(
          `https://6388c1b5d94a7e5040a6125c.mockapi.io/cart/${found.id}`,
        );
      } else {
        await setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          'https://6388c1b5d94a7e5040a6125c.mockapi.io/cart',
          obj,
        );
        // модифицируем объекты в корзине добавляя им ID как получим
        // обрати внимани что мы возвращаем prev.map
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.title === data.title) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      throw Error(`Impossible to add to Cart: ${error.message}`);
    }
  };

  const modifyFavorites = async (obj) => {
    try {
      const found = favoriteItems.find((item) => item.title === obj.title);
      if (found) {
        setFavoriteItems((prev) => prev.filter((item) => item.id !== found.id));
        await axios.delete(
          `https://6388c1b5d94a7e5040a6125c.mockapi.io/favorite/${found.id}`,
        );
      } else {
        setFavoriteItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          'https://6388c1b5d94a7e5040a6125c.mockapi.io/favorite',
          obj,
        );
        setFavoriteItems((prev) =>
          prev.map((item) => {
            if (item.title === data.title) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      throw Error(`Impossible to add to favorites ${error.message}`);
    }
  };

  const handleCartState = () => setIsCartOpened(!isCartOpened);

  const isAddedToCart = (title) => {
    return cartItems.find((cartItem) => cartItem.title === title);
  };

  const isAddedToFavorited = (title) => {
    return favoriteItems.some((item) => item.title === title);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favoriteItems,
        isAddedToCart,
        isAddedToFavorited,
        handleCartState,
        setCartItems,
        modifyFavorites,
        modifyCart,
      }}
    >
      <div className='wrapper'>
        <Overlay
          items={cartItems}
          onCloseCart={handleCartState}
          onRemove={modifyCart}
          opened={isCartOpened}
        />

        <Header onClickCart={handleCartState} />

        <Routes>
          <Route
            path='/'
            element={
              <Home
                items={items}
                cartItems={cartItems}
                onAddToCart={modifyCart}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorites={modifyFavorites}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path='favorites/*'
            element={
              <Favorites
                onAddToFavorites={modifyFavorites}
                onAddToCart={modifyCart}
              />
            }
          />
          <Route
            path='orders/*'
            element={
              <Orders
                onAddToFavorites={modifyFavorites}
                onAddToCart={modifyCart}
              />
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
