import React from "react";

import MenuItem from "components/MenuItem/MenuItem";
import { Category } from "types/Category";
import { Product } from "types/Product";

import styles from "./MenuCategory.module.scss";

type Props = {
  category: Category;
  products: Product[];
};

function MenuCategory({ category, products }: Props) {
  return (
    <div className={styles["menu-category"]}>
      <h2 className={styles.heading}>{category}</h2>
      <ul className={styles["cards-wrapper"]}>
        {products.map((p) => (
          <MenuItem key={p.name} product={p} />
        ))}
      </ul>
    </div>
  );
}

export default MenuCategory;
