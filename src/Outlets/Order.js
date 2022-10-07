import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card/Card";
import Osummary from "../Components/Osummary/Osummary";

const Order = () => {
  let initial = [];
  if (localStorage.getItem("cart")) {
    initial = JSON.parse(localStorage.getItem("cart"));
  }
  const products = useLoaderData();
  console.log(products);

  const [addedProducts, setAddedProducts] = useState(initial);

  const addToCart = (product) => {
    const newProducts = [...addedProducts, product];
    setAddedProducts(newProducts);

    // set to localstorage
    localStorage.setItem("cart", JSON.stringify(newProducts));
  };
  return (
    <div>
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
};

export default Order;
