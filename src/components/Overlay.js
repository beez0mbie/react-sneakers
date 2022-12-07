import { Info } from './Info';

const Overlay = ({ onCloseCart, items = [], onRemove }) => {
  const handleRemoveClick = (obj) => {
    onRemove(obj);
  };

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
                    onClick={() => handleRemoveClick(item)}
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

              <button className='greenButton'>
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
            title='Корзина пустая'
            description='Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            image='/img/empty-cart.jpg'
          />
        )}
      </div>
    </div>
  );
};

export default Overlay;
