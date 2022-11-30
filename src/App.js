import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Overlay from "./components/Overlay";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imgUrl: "/img/sneakers/1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15999,
    imgUrl: "/img/sneakers/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imgUrl: "/img/sneakers/3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imgUrl: "/img/sneakers/4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper">
      {/* <Overlay/> */}
      <Header />

      <div className="content">
        <div className="headline">
          <h1>Все Кроссовки</h1>
          <div className="search">
            <img
              src="/img/search.svg"
              alt="Search"
            />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="cards">
          {arr.map((el) => (
            <Card
              title={el.title}
              price={el.price}
              img={el.imgUrl}
              onClickFavorite={() => console.log("click favorite")}
              onClickPlus={() => console.log("click plus")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
