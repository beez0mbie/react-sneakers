import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import Overlay from './components/Overlay';
import { Routes, Route } from 'react-router-dom';
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
      const itemsResponse = await axios.get(
        'https://6388c1b5d94a7e5040a6125c.mockapi.io/sneakers',
      );
      const cartResponse = await axios.get(
        'https://6388c1b5d94a7e5040a6125c.mockapi.io/cart',
      );
      const favoriteItems = await axios.get(
        'https://6388c1b5d94a7e5040a6125c.mockapi.io/favorite',
      );

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavoriteItems(favoriteItems.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const modifyCart = async (obj) => {
    try {
      const found = cartItems.find((item) => item.title === obj.title);
      if (found) {
        console.log('onDeleteToCart', found.id);
        axios.delete(
          `https://6388c1b5d94a7e5040a6125c.mockapi.io/cart/${found.id}`,
        );
        setCartItems((prev) => prev.filter((item) => item.id !== found.id));
      } else {
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

  const modifyFavorites = async (obj) => {
    try {
      const found = favoriteItems.find((item) => item.title === obj.title);
      if (found) {
        axios.delete(
          `https://6388c1b5d94a7e5040a6125c.mockapi.io/favorite/${found.id}`,
        );
        setFavoriteItems((prev) => prev.filter((item) => item.id !== found.id));
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

  const handleCartState = () => setIsCartOpened(!isCartOpened);

  const isAddedToCart = (title) => {
    return cartItems.some((cartItem) => cartItem.title === title);
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
      }}
    >
      <div className='wrapper'>
        {isCartOpened && (
          <Overlay
            items={cartItems}
            onCloseCart={handleCartState}
            onRemove={modifyCart}
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
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
