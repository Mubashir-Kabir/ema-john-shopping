import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Osummary from "./Components/Osummary/Osummary";

function App() {
  let initial = [];
  if (localStorage.getItem("cart")) {
    initial = JSON.parse(localStorage.getItem("cart"));
  }
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [addedProducts, setAddedProducts] = useState(initial);

  const addToCart = (product) => {
    const newProducts = [...addedProducts, product];
    setAddedProducts(newProducts);

    // set to localstorage
    localStorage.setItem("cart", JSON.stringify(newProducts));
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
