import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const useProductContext = () => {
  return useContext(ProductContext);
};

export default useProductContext;

// not in use yet
