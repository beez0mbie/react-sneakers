import { useCart } from '../hook/useCart';
import { Link } from 'react-router-dom';

const Header = ({ onClickCart }) => {
  const { totalPrice } = useCart();

  return (
    <header className='header'>
      <Link to='/react-sneakers/'>
        <div className='logo'>
          <img
            src='img/logo.png'
            alt='sneakers'
            className='logoSneakers'
          />
          <div className='description'>
            <h5 className='desctiptionText'>React Sneacers</h5>
            <p className='desctiptionSubText'>Магазин лучших кросовок</p>
          </div>
        </div>
      </Link>
      <ul className='iconsUl'>
        <li
          className='iconLi cart'
          onClick={onClickCart}
        >
          <img
            src='img/cart.svg'
            alt='Cart'
          />
          <span className='cartPrice'>{totalPrice} руб</span>
        </li>
        <Link to='/react-sneakers/favorites'>
          <li className='iconLi heart'>
            <img
              src='img/heart.svg'
              alt='Heart'
            />
          </li>
        </Link>
        <Link to='/react-sneakers/orders'>
          <li className='iconLi user'>
            <img
              src='img/user.svg'
              alt='User'
            />
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
