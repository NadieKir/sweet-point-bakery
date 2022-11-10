import React, { createContext, useState } from "react";

import { CartEntry } from "types/CartEntry";
import { Product } from "types/Product";

export type CartContextType = {
  cartData: CartEntry[];
  addCartItem: (item: Product) => void;
  deleteCartItem: (id: number) => void;
  incrementCartItem: (item: Product) => void;
  decrementCartItem: (item: Product) => void;
  clearCart: () => void;
};

type Props = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({ children }: Props) => {
  const savedCart = localStorage.getItem("cart");
  const [cartData, setCartData] = useState<CartEntry[]>(savedCart ? JSON.parse(savedCart) : []);

  const addCartItem = (newItem: Product) => {
    setCartData([...cartData, { amount: 1, product: newItem }]);
  };

  const deleteCartItem = (id: number) => {
    setCartData(cartData.filter((entry) => entry.product.id !== id));
  };

  const incrementCartItem = (item: Product) => {
    setCartData(
      cartData.map((entry) =>
        entry.product.id === item.id ? { ...entry, amount: ++entry.amount } : entry
      )
    );
  };

  const decrementCartItem = (item: Product) => {
    const productAmount = cartData.find((entry) => entry.product.id === item.id)?.amount;

    if (productAmount === 1) {
      deleteCartItem(item.id);
    } else {
      setCartData(
        cartData.map((entry) =>
          entry.product.id === item.id ? { ...entry, amount: --entry.amount } : entry
        )
      );
    }
  };

  const clearCart = () => {
    setCartData([]);
  };

  const value: CartContextType = {
    cartData,
    addCartItem,
    deleteCartItem,
    incrementCartItem,
    decrementCartItem,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
