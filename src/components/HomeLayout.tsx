import React, { useEffect, useState } from "react";
import Search from "./Search";
import Categories from "./Categories";
import ProductGrid from "./ProductGrid";
import useAxios from "../hooks/useAxios";
import { Product } from "../Interfaces";
import HeaderBanner from "./HeaderBanner";
import useProductContext from "../hooks/useProductContext";

// interface Data {
//   response: Product[];
//   loading: boolean;
//   error: string;
// }

interface Axios {
  response: Product[];
  loading: boolean;
  error: string;
  refetch: () => void;
}

const HomeLayout = () => {
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);
  const { products } = useProductContext();

  const { response, loading }: Axios = useAxios();

  return loading ? (
    <div className="loading-div">
      <img src="./assets/throbber.gif" alt="loading" />
    </div>
  ) : (
    <main>
      <HeaderBanner />
      <Search products={products} setFilterProducts={setFilterProducts} />
      <Categories products={products} setFilterProducts={setFilterProducts} />
      <ProductGrid filterProducts={filterProducts} />
    </main>
  );
};

export default HomeLayout;
