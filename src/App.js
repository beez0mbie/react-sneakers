function App() {
  return (
    <div className="wrapper">

      <div className="overlay">
        <div className="drawer">
          <div className="cartTitle">
            <h2>Корзина </h2>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          
          <div className="cartItems">
            <div className="cartItem">
              <img className="cartImg" src="/img/sneakers/1.jpg" alt="Sneakers" />
              <div className="cartItemTextContent">
                <p className="cartItemName">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b className="cartItemPrice">12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>
            <div className="cartItem">
              <img className="cartImg" src="/img/sneakers/1.jpg" alt="Sneakers" />
              <div className="cartItemTextContent">
                <p className="cartItemName">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b className="cartItemPrice">12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li className="cartPrice">
                <span>Итого:</span>
                <div className="dashed"></div>
                <b>21 498 руб.</b>
              </li>
              <li className="cartPrice">
                <span>Налог 5%</span>
                <div className="dashed"></div>
                <b>1074 руб.</b>
              </li>
            </ul>

            <button className="checkoutBtn">
              Оформить заказ
              <img src="/img/arrow.svg" alt="Arrow" className="arrowImg" />
            </button>

          </div>
          
        </div>
      </div>

      <header className="header">
        <div className="logo">
          <img src="/img/logo.png" alt="sneakers" className="logoSneakers"/>
          <div className="description">
            <h5 className="desctiptionText">React Sneacers</h5>
            <p className="desctiptionSubText">Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className="iconsUl">
          <li className="iconLi cart">
            <img src="/img/cart.svg" alt="Cart"/>
            <span className="cartPrice">1205 руб</span>
          </li>
          <li className="iconLi heart">
            <img src="/img/heart.svg" alt="Heart" />
          </li>
          <li className="iconLi user">
            <img src="/img/user.svg" alt="User" />
          </li>
        </ul>
      </header>     
      
      <div className="content">
        
        <div className="headline">
          <h1 >Все Кроссовки</h1>
          <div className="search">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>

        </div>
        
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unchecked.svg" alt="Unchecked"/>
            </div>
            <img className="sneakersImg" src="/img/sneakers/1.jpg" alt="sneakers" />
            <h5 className="sneakersName">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="price">
                <span className="priceText">цена:</span>
                <b className="priceCount">12 999 руб.</b>
              </div>
              <img className="button" src="/img/plus.svg" alt="plus" />
            </div>
          </div>

          <div className="card">
            <img className="sneakersImg" src="/img/sneakers/2.jpg" alt="sneakers" />
            <h5 className="sneakersName">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="price">
                <span className="priceText">цена:</span>
                <b className="priceCount">12 999 руб.</b>
              </div>
              <img className="button" src="/img/plus.svg" alt="plus" />
            </div>
          </div>

          <div className="card">
            <img className="sneakersImg" src="/img/sneakers/3.jpg" alt="sneakers" />
            <h5 className="sneakersName">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="price">
                <span className="priceText">цена:</span>
                <b className="priceCount">12 999 руб.</b>
              </div>
              <img className="button" src="/img/plus.svg" alt="plus" />
            </div>
          </div>

          <div className="card">
            <img className="sneakersImg" src="/img/sneakers/4.jpg" alt="sneakers" />
            <h5 className="sneakersName">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="price">
                <span className="priceText">цена:</span>
                <b className="priceCount">12 999 руб.</b>
              </div>
              <img className="button" src="/img/plus.svg" alt="plus" />
            </div>
          </div>


        </div>

      </div>

    </div>

  );
}

export default App;
