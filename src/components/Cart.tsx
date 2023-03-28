import React, { ReactElement } from "react";
import useShoppingCartContext from "../hooks/useShoppingCartContext";
import useProductContext from "../hooks/useProductContext";

const Cart = (): ReactElement => {
  const { shoppingCart } = useShoppingCartContext();
  const { products } = useProductContext();
  function getShoppingItems(): string {
    if (Object.keys(shoppingCart).length > 0) {
      let result: string = "";
      const cartLength: string[] = Object.keys(shoppingCart);
      for (let i of cartLength) {
        result += `${shoppingCart[i].title} qty ${shoppingCart[i].quantity} | `;
      }

      return result;
    }
  }
  return <div>{getShoppingItems()}</div>;
};

export default Cart;
