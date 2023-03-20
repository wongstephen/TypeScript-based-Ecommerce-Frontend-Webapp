import React, { createContext, useState } from "react";
import { Product } from "../Interfaces";

//create content
export const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;


// not in use yet