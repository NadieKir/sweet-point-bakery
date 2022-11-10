import React from "react";

import logo from "assets/images/logo.svg";
import heart from "assets/images/heart.svg";

import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="Logo" width="130px" />
        <div className={styles["heading-wrapper"]}>
          <img src={heart} alt="Heart" width="16px" />
          <h1 className={styles.heading}>
            The yummiest fresh <span className={styles.yellow}>cakes and bakery</span> delivery
          </h1>
          <img src={heart} alt="Heart" width="16px" />
        </div>
      </div>
    </header>
  );
}

export default Header;
