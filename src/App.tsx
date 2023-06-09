import "./App.css";

import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";

import ShoppingCartContextProvider from "./context/ShoppingCartContext";

import HomeLayout from "./components/HomeLayout";
import Cart from "./components/Cart";
import Layout from "./components/Layout";
import ProductDetail from "./components/ProductDetail";
import ProductProvider from "./context/ProductContext";

function App(): ReactElement {
  return (
    <ShoppingCartContextProvider>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </ProductProvider>
    </ShoppingCartContextProvider>
  );
}

export default App;
{
  /* <a href="https://www.flaticon.com/free-icons/box" title="box icons">Box icons created by Freepik - Flaticon</a> */
  /* <a href="https://www.freepik.com/free-vector/happy-people-run-store-sale-black-friday_30538731.htm#query=shopping&position=29&from_view=search&track=sph">Image by upklyak</a> on Freepik */
}
