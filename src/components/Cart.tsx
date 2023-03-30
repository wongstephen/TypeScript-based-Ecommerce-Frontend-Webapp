import React, { ReactElement } from "react";
import useShoppingCartContext from "../hooks/useShoppingCartContext";
import useProductContext from "../hooks/useProductContext";
import { Product } from "../Interfaces";
import { Link, useNavigate } from "react-router-dom";

interface CartProp {
  products: Product[];
  productId: number;
  quantity: number;
}
const CartItem = ({
  products,
  productId,
  quantity,
}: CartProp): ReactElement => {
  const item = products.filter((product) => product.id == productId)[0];

  return (
    <div className="cart__item">
      <img className="cart__image" src={item.thumbnail} />
      <p>{item.title}</p>
      <p>{quantity}</p>
      <p>${item.price}</p>
      <p>${item.price * quantity}</p>
    </div>
  );
};

const Cart = (): ReactElement => {
  const { products } = useProductContext();
  const { shoppingCart } = useShoppingCartContext();
  const navigate = useNavigate();
  function getSubTotal() {
    const cartArr = Object.keys(shoppingCart).map(
      (cartItemId) =>
        shoppingCart[cartItemId].price * shoppingCart[cartItemId].quantity
    );
    const subtotal = cartArr.reduce((a, b) => a + b);
    const shipping = Object.keys(shoppingCart).length * 5;
    const tax = subtotal * 0.12;
    const est = shipping + tax;
    return { subtotal, est };
  }

  function checkCartLength(): boolean {
    if (Object.keys(shoppingCart).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <section className="cart">
      <h2>Shopping Cart</h2>

      {checkCartLength() ? (
        <>
          <div className="cart-items__container">
            <div className="cart__item cart__title">
              <div className="cart__image-placeholder"></div>
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
              <p>Total</p>
            </div>
            {Object.keys(shoppingCart)?.map((item) => {
              return (
                <CartItem
                  key={item}
                  products={products}
                  productId={Number(item)}
                  quantity={Number(shoppingCart[item].quantity)}
                />
              );
            })}
          </div>
          <div className="cart__totals">
            <div>
              <p>Sub-Total</p>
              <p>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(getSubTotal().subtotal)}
              </p>
            </div>
            <div>
              <p>Estimated Shipping & Taxes</p>
              <p>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(getSubTotal().est)}
              </p>
            </div>
            <div>
              <p>Total</p>
              <p>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(getSubTotal().est + getSubTotal().subtotal)}
              </p>
            </div>
            <div>
              <button onClick={() => navigate("/")}>Continue Shopping</button>

              <button>Checkout</button>
            </div>
          </div>
        </>
      ) : (
        <div className="cart__empty">
          <p>Cart is Empty!</p>
          <Link to="/">
            <p>Continue Shopping</p>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Cart;
