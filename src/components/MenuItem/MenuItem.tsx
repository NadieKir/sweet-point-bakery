import React, { useContext } from "react";

import { Product } from "types/Product";
import { CartContext, CartContextType } from "context/CartContext";
import ManageAmountButton from "components/ManageAmountButton/ManageAmountButton";

import styles from "./MenuItem.module.scss";

type Props = {
  product: Product;
};

function MenuItem({ product }: Props) {
  const { cartData, addCartItem, incrementCartItem, decrementCartItem } = useContext(
    CartContext
  ) as CartContextType;

  const productEntryInCart = cartData.find((entry) => entry.product.id === product.id);

  return (
    <li>
      <article className={styles.card}>
        <img className={styles["card-image"]} src={product.image} alt={product.name} />
        <div className={styles["card-info"]}>
          <h3 className={styles.heading}>{product.name}</h3>
          <p className={styles.description}>{product.description}</p>
          <div className={styles["price-button-wrapper"]}>
            <span className={styles.price}>{product.price}$</span>
            {productEntryInCart ? (
              <ManageAmountButton
                increment={() => incrementCartItem(product)}
                decrement={() => decrementCartItem(product)}
              >
                {productEntryInCart.amount}
              </ManageAmountButton>
            ) : (
              <button className={styles["buy-button"]} onClick={() => addCartItem(product)}>
                Buy
              </button>
            )}
          </div>
        </div>
      </article>
    </li>
  );
}

export default MenuItem;
