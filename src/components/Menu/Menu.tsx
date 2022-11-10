import React from "react";

import MenuCategory from "components/MenuCategory/MenuCategory";
import useProducts from "hooks/useProducts";
import { groupBy } from "helpers/groupBy";

import styles from "./Menu.module.scss";

function Menu() {
  const [products, isLoading] = useProducts();

  const productsMap = groupBy(products, (p) => p.category);
  const categories = Array.from(productsMap.keys());

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.menu}>
      {categories.map((category) => (
        <MenuCategory key={category} category={category} products={productsMap.get(category)!} />
      ))}
    </section>
  );
}

export default Menu;
