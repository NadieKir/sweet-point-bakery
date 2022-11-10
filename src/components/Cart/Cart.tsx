import React, { useContext, useEffect, useState } from "react";

import { CartContext, CartContextType } from "context/CartContext";
import CartItem from "components/CartItem/CartItem";
import OrderAcceptedNotification from "components/OrderAcceptedNotification/OrderAcceptedNotification";

import emptyStateImage from "assets/images/empty-cart-background.svg";
import styles from "./Cart.module.scss";

function Cart() {
  const { cartData, clearCart } = useContext(CartContext) as CartContextType;

  const [totalPrice, setTotalPrice] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const cartIsEmpty = cartData.length === 0;

  useEffect(() => {
    let total = cartData.reduce((sum, current) => sum + current.product.price * current.amount, 0);
    let roundTotal = Number(total.toFixed(2));

    setTotalPrice(roundTotal);
  }, [cartData]);

  const handleCheckout = () => {
    clearCart();
    setShowNotification(true);
  };

  if (cartIsEmpty) {
    return (
      <section className={styles.cart}>
        <h2 className={styles.heading}>Cart</h2>
        <div className={styles["empty-cart-info"]}>
          <img
            className={styles["empty-cart-image"]}
            src={emptyStateImage}
            alt="Cart is empty"
            width="70px"
          />
          <h3 className={styles["empty-cart-heading"]}>Your cart is empty</h3>
          <p className={styles["empty-cart-description"]}>
            Add some tasty cakes or bakery from the menu on the left
          </p>
        </div>

        {showNotification && (
          <OrderAcceptedNotification onFinish={() => setShowNotification(false)} />
        )}
      </section>
    );
  }

  return (
    <section className={styles.cart}>
      <h2 className={styles.heading}>Cart</h2>
      <div className={styles["cart-items"]}>
        {cartData.map((cartItem) => (
          <CartItem key={cartItem.product.id} cartEntry={cartItem} />
        ))}
      </div>
      <div className={styles.total}>
        Total: <span className={styles["bold-blue"]}>{totalPrice}$</span>
      </div>
      <button className={styles["checkout-button"]} onClick={handleCheckout}>
        Checkout
      </button>
    </section>
  );
}

export default Cart;
