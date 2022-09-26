import React from "react";
import "./Card.css";

const Card = ({ product, addToCart }) => {
  const { img, name, price, seller, ratings } = product;
  return (
    <div className="card">
      <div className="card-inner">
        <img src={img} alt="" />
        <div>
          <h3>{name}</h3>
          <h4>Price: ${price}</h4>
          <p>Manufacture: {seller}</p>
          <p>Rattings: {ratings} srat</p>
        </div>
      </div>
      <div className="btn-div">
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
