import React, { useContext } from "react";

import { CartContext, CartContextType } from "context/CartContext";
import { CartEntry } from "types/CartEntry";

import deleteItem from "assets/images/cross.svg";
import styles from "./CartItem.module.scss";

type Props = {
  cartEntry: CartEntry;
};

function CartItem({ cartEntry }: Props) {
  const { deleteCartItem } = useContext(CartContext) as CartContextType;

  return (
    <div className={styles["cart-item"]}>
      <div className={styles["item-info"]}>
        <h3 className={styles.heading}>{cartEntry.product.name}</h3>
        <span className={styles.price}>
          <span className={styles.blue}>{cartEntry.product.price}$</span> × {cartEntry.amount}
        </span>
      </div>
      <button
        className={styles["delete-button"]}
        onClick={() => deleteCartItem(cartEntry.product.id)}
      >
        <img src={deleteItem} alt="Delete" width="12px" />
      </button>
    </div>
  );
}

export default CartItem;
