import React, { ReactElement } from "react";
import useShoppingCartContext from "../hooks/useShoppingCartContext";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ShoppingCart } from "../context/ShoppingCartContext";
import { RiShoppingCart2Fill } from "react-icons/ri";

interface Cart {
  shoppingCart: ShoppingCart;
}

const Header = (): ReactElement => {
  const { shoppingCart }: Cart = useShoppingCartContext();
  const navigate: NavigateFunction = useNavigate();

  function countCart(): number {
    const cartItems = Object.keys(shoppingCart);
    if (cartItems.length > 0) {
      return cartItems
        .map((item) => {
          return shoppingCart[item].quantity;
        })
        .reduce((a, b) => a + b, 0);
    }
  }

  return (
    <>
      <header>
        <div className="header__logo" onClick={() => navigate("/")}>
          <img
            src="/assets/open-box-small.gif"
            alt="open box"
            className="header__image"
          />
          <h1 className="header__title">gearguide</h1>
        </div>
        {/* <nav></nav> */}
        <div
          className="header__shopping-container"
          onClick={() => navigate("/cart")}
        >
          <RiShoppingCart2Fill className="header__shopping-cart" />

          {countCart() > 0 && (
            <div className="header__shopping-num">
              <p>{countCart()}</p>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
