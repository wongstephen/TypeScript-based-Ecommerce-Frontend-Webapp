import React, { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

export interface ShoppingCart {
  id: {
    title: string;
    quantity: number;
    price: number;
  };
}

const ShoppingCartContextProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState({});

  // useEffect(() => console.log(shoppingCart), [shoppingCart]);

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContextProvider;
