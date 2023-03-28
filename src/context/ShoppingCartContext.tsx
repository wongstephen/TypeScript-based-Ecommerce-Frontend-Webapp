import React, { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

interface ShoppingCartItem {
  title: string;
  quantity: number;
  price: number;
}
export interface ShoppingCart {
  [key: string]: ShoppingCartItem;
}

const ShoppingCartContextProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({});

  // useEffect(() => console.log(shoppingCart), [shoppingCart]);

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContextProvider;
