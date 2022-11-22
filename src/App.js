function App() {
  return (
    <div className="wrapper">
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
        
        <h1 className="headline">Все Кроссовки</h1>
        
        <div className="cards">
          <div className="card">
            <img className="sneakersImg" src="/img/sneakers/1.jpg" alt="sneakers" />
            <h5 className="sneakersName">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardBottom">
              <div className="price">
                <span className="priceText">цена:</span>
                <b className="priceCount">12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
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
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
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
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
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
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>


        </div>

      </div>

    </div>

  );
}

export default App;
