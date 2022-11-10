import React from "react";

import CartProvider from "context/CartContext";
import Cart from "components/Cart/Cart";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Menu from "components/Menu/Menu";

import styles from "./App.module.scss";

function App() {
  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <div className={styles.container}>
          <CartProvider>
            <Menu></Menu>
            <Cart></Cart>
          </CartProvider>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
