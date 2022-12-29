import React from "react";
import { Link } from "react-router-dom";
import PopupLogin from "../Popuologin/PopupLogin";
import styles from "./style.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/category">
        <p className={styles.companyName}>
          My<span>Store</span>
        </p>
      </Link>
      <PopupLogin />
    </div>
  );
}

export default Header;
