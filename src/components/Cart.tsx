import React, { ReactElement } from "react";
import useShoppingCartContext from "../hooks/useShoppingCartContext";

const Cart = (): ReactElement => {
  const { shoppingCart } = useShoppingCartContext();
  console.log(shoppingCart);

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
