import React, { useState } from "react";
import Search from "./Search";
import Categories from "./Categories";
import ProductGrid from "./ProductGrid";
import { useAxios } from "../hooks/useAxios";
import { Product } from "../Interfaces";

interface Data {
  response: Product[];
  loading: boolean;
  error: string;
}

const HomeLayout = () => {
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);

  const { response: products, loading, error }: Data = useAxios();

  return loading ? (
    <div className="loading-div">
      <img src="./assets/throbber.gif" alt="loading" />
    </div>
  ) : (
    <main>
      <Search products={products} setFilterProducts={setFilterProducts} />
      <Categories products={products} setFilterProducts={setFilterProducts} />
      <ProductGrid filterProducts={filterProducts} />
    </main>
  );
};

export default HomeLayout;
