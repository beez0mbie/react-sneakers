import { useState } from 'react';
import axios from 'axios';

import { Info } from '../Info';
import { useCart } from '../../hook/useCart';

import styles from './Overlay.module.scss';

const Overlay = ({ onCloseCart, items = [], onRemove, opened }) => {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        'https://6388c1b5d94a7e5040a6125c.mockapi.io/orders',
        { items: cartItems },
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
      for (const item of cartItems) {
        // костыль потому что mockapi не может в ассинхрон с Promise.all
        await axios.delete(
          `https://6388c1b5d94a7e5040a6125c.mockapi.io/cart/${item.id}`,
        );
      }
    } catch (e) {
      alert('Не удалось создать заказ :(');
    }
    setIsLoading(false);
  };

  const tax = Math.ceil((totalPrice / 100) * 5);

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <div className='cartTitle'>
          <h2>Корзина </h2>
          <img
            className='closeCartBtn'
            src='/img/btn-remove.svg'
            alt='Close Cart'
            onClick={onCloseCart}
          />
        </div>
        {items.length > 0 ? (
          <div className='cartContent'>
            <div className='cartItems'>
              {items.map((item) => (
                <div
                  key={item.title}
                  className='cartItem'
                >
                  <img
                    className='cartImg'
                    src={item.imgUrl}
                    alt='Sneakers'
                  />
                  <div className='cartItemTextContent'>
                    <p className='cartItemName'>{item.title}</p>
                    <b className='cartItemPrice'>{item.price} руб.</b>
                  </div>
                  <img
                    className='removeBtn'
                    src='/img/btn-remove.svg'
                    alt='Remove'
                    onClick={() => onRemove(item)}
                  />
                </div>
              ))}
            </div>

            <div className='cartTotalBlock'>
              <ul>
                <li className='cartPrice'>
                  <span>Итого:</span>
                  <div className='dashed'></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li className='cartPrice'>
                  <span>Налог 5%</span>
                  <div className='dashed'></div>
                  <b>{tax} руб.</b>
                </li>
              </ul>

              <button
                className='greenButton'
                onClick={onClickOrder}
                disabled={isLoading}
              >
                Оформить заказ
                <img
                  src='/img/arrow.svg'
                  alt='Arrow'
                  className='arrowImg'
                />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={
              isOrderComplete
                ? '/img/complete-order.svg'
                : '/img/empty-cart.svg'
            }
          />
        )}
      </div>
    </div>
  );
};

export default Overlay;
