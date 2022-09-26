import React from "react";
import "./Osummary.css";

const Osummary = ({ addedProducts, setAddedProducts }) => {
  const total = addedProducts.reduce(
    (total, product) => total + product.price,
    0
  );
  const shipping = addedProducts.reduce(
    (total, product) => total + product.shipping,
    0
  );
  const tax = total * 0.075;
  const grandTotal = total + shipping + tax;
  return (
    <div className="oSummary-container">
      <h3>Order Summary</h3>
      <div className="summary-info">
        <p>Selected Items: {addedProducts.length}</p>
        <p>Total Price:${total}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
      </div>
      <button className="clear-cart-btn" onClick={() => setAddedProducts([])}>
        Clear Cart
      </button>
      <button className="review-order-btn">Review Order</button>
    </div>
  );
};

export default Osummary;
