import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card/Card";
import Osummary from "../Components/Osummary/Osummary";
import { addToDb } from "../utilities/fakedb";

const Order = () => {
  const products = useLoaderData();
  let initial = [];
  if (localStorage.getItem("shopping-cart")) {
    const stored = JSON.parse(localStorage.getItem("shopping-cart"));
    stored.forEach((element) => {
      initial.push(
        products.find((product) => {
          if (product.id === element.id) {
            product.quantity = element.quantity;
          }
          return product;
        })
      );
    });
  }
  const [addedProducts, setAddedProducts] = useState(initial);

  const addToCart = (product) => {
    let flag;
    addedProducts?.forEach((element) => {
      if (element.id === product.id) {
        element.quantity += 1;
        flag = true;
      }
    });
    if (flag) {
      const newProducts = [...addedProducts];
      setAddedProducts(newProducts);
    } else {
      const newProducts = [...addedProducts, product];
      setAddedProducts(newProducts);
    }
    // set to localstorage
    addToDb(product.id);
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
