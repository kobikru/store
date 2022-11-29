import React from "react";
import { Link } from "react-router-dom";
import CategoryList from "./CategoryList";

function Header() {
  return (
    <div className="header">
      <Link to="/category">
        <h1>My Store</h1>
      </Link>
    </div>
  );
}

export default Header;
