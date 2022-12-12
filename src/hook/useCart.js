import AppContext from '../context';
import { useContext } from 'react';

export const useCart = () => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const totalPrice = cartItems.reduce(
    (prev, current) => (prev += current.price),
    0,
  );

  return { cartItems, setCartItems, totalPrice };
};
