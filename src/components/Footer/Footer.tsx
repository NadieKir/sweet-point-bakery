import React from "react";

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.description}>Made by: Nadezhda Kireyenko</p>
      </div>
    </footer>
  );
}

export default Footer;
