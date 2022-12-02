import { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Overlay from './components/Overlay';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpened, setIsCartOpened] = useState(false);

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

  return (
    <div className='wrapper'>
      {isCartOpened && <Overlay onCloseCart={handleCartState} />}

      <Header onClickCart={handleCartState} />

      <div className='content'>
        <div className='headline'>
          <h1>Все Кроссовки</h1>
          <div className='search'>
            <img
              src='/img/search.svg'
              alt='Search'
            />
            <input placeholder='Поиск...' />
          </div>
        </div>

        <div className='cards'>
          {items.map((el) => (
            <Card
              title={el.title}
              price={el.price}
              img={el.imgUrl}
              onClickFavorite={() => console.log('click favorite')}
              onClickPlus={() => console.log('click plus')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
