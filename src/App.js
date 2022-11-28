import Card from "./components/Card";
import Header from "./components/Header";
import Overlay from "./components/Overlay";

function App() {
  return (
    <div className="wrapper">

      <Overlay/>

      <Header/>
      
      <div className="content">
        
        <div className="headline">
          <h1 >Все Кроссовки</h1>
          <div className="search">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>

        </div>
        
        <div className="cards">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>

      </div>

    </div>

  );
}

export default App;
