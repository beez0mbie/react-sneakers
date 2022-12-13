import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Card from '../components/Card';
import { Info } from '../components/Info';
import { useEmojis } from '../hook/useEmojis';

import styles from './Pages.module.scss';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let navigate = useNavigate();
  const routeToHome = () => {
    navigate('/react-sneakers/');
  };
  const emoji = useEmojis();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          'https://6388c1b5d94a7e5040a6125c.mockapi.io/orders',
        );
        setOrders(
          data.reduce((prev, current) => [...prev, ...current.items], []),
        );
        setIsLoading(false);
      } catch (error) {
        alert('Error when get orders');
        console.error(error);
      }
    })();
  }, []);

  const renderItems = () => {
    if (isLoading) {
      return (
        <div className={styles.cards}>
          {[...Array(10)].map((item, index) => (
            <Card
              key={index}
              loading={isLoading}
              {...item}
            />
          ))}
        </div>
      );
    } else if (orders.length > 0) {
      return (
        <div className={styles.cards}>
          {orders.map((item, index) => (
            <Card
              key={index}
              loading={isLoading}
              {...item}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className='fillBlock'>
          <Info
            title={'Заказов нет'}
            description={
              'Вы не оформили ни один заказ, иди работай и покупай кроссовочки'
            }
            handleInfoState={routeToHome}
            emoji={emoji}
          />
        </div>
      );
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.headline}>
        <h1>Мои заказы</h1>
      </div>
      {renderItems()}
    </div>
  );
};

export default Orders;
