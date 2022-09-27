import React from "react";
import "./Osummary.css";

const Osummary = ({ addedProducts, setAddedProducts }) => {
  const total = addedProducts?.reduce(
    (total, product) => total + product.price,
    0
  );
  const shipping = addedProducts?.reduce(
    (total, product) => total + product.shipping,
    0
  );
  const tax = total * 0.075;
  const grandTotal = total + shipping + tax;
  const clearcart = () => {
    setAddedProducts([]);
    localStorage.removeItem("cart");
  };
  return (
    <div className="oSummary-container">
      <h3>Order Summary</h3>
      <div className="summary-info">
        <p>
          Selected Items: {addedProducts?.length ? addedProducts.length : 0}
        </p>
        <p>Total Price:${total ? total : 0}</p>
        <p>Total Shipping Charge: ${shipping ? shipping : 0}</p>
        <p>Tax: ${tax ? tax.toFixed(2) : 0}</p>
        <h4>Grand Total: ${grandTotal ? grandTotal.toFixed(2) : 0}</h4>
      </div>
      <button className="clear-cart-btn" onClick={clearcart}>
        Clear Cart
      </button>
      <button className="review-order-btn">Review Order</button>
    </div>
  );
};

export default Osummary;
