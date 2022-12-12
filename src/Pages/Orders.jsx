import axios from 'axios';
import styles from './Pages.module.scss';
import Card from '../components/Card';
import { useEffect, useState } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className={styles.content}>
      <div className={styles.headline}>
        <h1>Мои заказы</h1>
      </div>
      <div className={styles.cards}>
        {(isLoading ? [...Array(10)] : orders).map((item, index) => (
          <Card
            key={index}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
