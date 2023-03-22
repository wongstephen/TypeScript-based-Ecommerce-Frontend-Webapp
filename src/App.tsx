import { FC, ReactElement, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ProductGrid from "./components/ProductGrid";
import Header from "./components/Header";
import { Product } from "./Interfaces";
import { useAxios } from "./hooks/useAxios";
import Categories from "./components/Categories";
import Search from "./components/Search";
import ShoppingCartContextProvider, {
  ShoppingCartContext,
} from "./context/ShoppingCartContext";

interface Data {
  response: Product[];
  loading: boolean;
  error: string;
}

function App(): ReactElement {
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);

  const { response: products, loading, error }: Data = useAxios();

  return (
    <ShoppingCartContextProvider>
      <div className="app">
        <Header />
        {loading ? (
          <div className="loading-div">
            <img src="./assets/throbber.gif" alt="loading" />
          </div>
        ) : (
          <main>
            <Search products={products} setFilterProducts={setFilterProducts} />
            <Categories
              products={products}
              setFilterProducts={setFilterProducts}
            />
            <ProductGrid filterProducts={filterProducts} />
          </main>
        )}
        <footer></footer>
      </div>
    </ShoppingCartContextProvider>
  );
}

export default App;
{
  /* <a href="https://www.flaticon.com/free-icons/box" title="box icons">Box icons created by Freepik - Flaticon</a> */

  {
    /* <a href="https://www.freepik.com/free-vector/happy-people-run-store-sale-black-friday_30538731.htm#query=shopping&position=29&from_view=search&track=sph">Image by upklyak</a> on Freepik */
  }
}
