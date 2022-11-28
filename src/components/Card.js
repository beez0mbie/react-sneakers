const Card = () => {
    return ( 
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
     );
}
 
export default Card;