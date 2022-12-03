const Overlay = ({ onCloseCart, items = [], onRemove }) => {
  const handleRemoveClick = (obj) => {
    onRemove(obj);
    console.log('onremove', obj);
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
        {/* <div className='cartItems'>
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
        </div> */}
        <div className='emptyCart'>
          <img
            className='emptyCartImage'
            src='/img/empty-cart.jpg'
            alt='EmptyCart'
          />
          <div>
            <h3 className='eptyCartTitle'>Корзина пустая</h3>
            <p className='eptyCartText'>
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
          </div>
          <button
            onClick={onCloseCart}
            className='greenButton'
          >
            Вернуться назад
            <img
              src='/img/arrow-left.svg'
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
