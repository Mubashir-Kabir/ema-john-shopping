import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="header-nav">
        <img src={logo} alt="" />
        <div>
          <NavLink to="/order">Order</NavLink>
          <NavLink to="/order-review">Order Review</NavLink>
          <NavLink to="/manage-inventory">Manage Inventory</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
