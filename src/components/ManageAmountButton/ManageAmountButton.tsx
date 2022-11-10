import React from "react";

import styles from "./ManageAmountButton.module.scss";

type Props = {
  children: number;
  increment: () => void;
  decrement: () => void;
};

function ManageAmountButton({ children, increment, decrement }: Props) {
  return (
    <div className={styles["manage-amount-button"]}>
      <button className={styles.control} onClick={decrement}>
        -
      </button>
      <span className={styles.amount}>{children}</span>
      <button className={styles.control} onClick={increment}>
        +
      </button>
    </div>
  );
}

export default ManageAmountButton;
