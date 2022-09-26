import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Osummary from "./Components/Osummary/Osummary";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const [addedProducts, setAddedProducts] = useState([]);
  const addToCart = (product) => {
    setAddedProducts([...addedProducts, product]);
  };
  return (
    <div className="App">
      <Header></Header>
      <div className="main-container">
        <div className="cards-container">
          {products.map((product) => (
            <Card
              product={product}
              addToCart={addToCart}
              key={product.id}
            ></Card>
          ))}
        </div>
        <div className="order-summary">
          <Osummary
            addedProducts={addedProducts}
            setAddedProducts={setAddedProducts}
          ></Osummary>
        </div>
      </div>
    </div>
  );
}

export default App;
