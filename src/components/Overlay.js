const Overlay = ({ onCloseCart, items = [] }) => {
  return (
    <div className='overlay'>
      <div className='drawer'>
        <div className='cartTitle'>
          <h2>Корзина </h2>
          <img
            className='closeCartBtn'
            src='/img/btn-remove.svg'
            alt='Remove'
            onClick={onCloseCart}
          />
        </div>

        <div className='cartItems'>
          {items.map((item) => (
            <div className='cartItem'>
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
              />
            </div>
          ))}
        </div>

        <div className='cartTotalBlock'>
          <ul>
            <li className='cartPrice'>
              <span>Итого:</span>
              <div className='dashed'></div>
              <b>21 498 руб.</b>
            </li>
            <li className='cartPrice'>
              <span>Налог 5%</span>
              <div className='dashed'></div>
              <b>1074 руб.</b>
            </li>
          </ul>

          <button className='checkoutBtn'>
            Оформить заказ
            <img
              src='/img/arrow.svg'
              alt='Arrow'
              className='arrowImg'
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
