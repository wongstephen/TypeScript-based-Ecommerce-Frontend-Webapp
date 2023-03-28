import React, { ReactElement } from "react";
import useShoppingCartContext from "../hooks/useShoppingCartContext";
import useProductContext from "../hooks/useProductContext";

const Cart = (): ReactElement => {
  const { shoppingCart } = useShoppingCartContext();
  const { products } = useProductContext();

  function getShoppingItems(): string {
    if (Object.keys(shoppingCart).length > 0) {
      let result: string = "";
      const cartLength: string[] = Object.keys(shoppingCart);
      for (let i of cartLength) {
        result += `${shoppingCart[i].title} qty ${shoppingCart[i].quantity} | `;
      }

      return result;
    }
  }
  return (
    <section className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items__container">
        <div className="cart__item">
          <div className="cart__image-placeholder"></div>
          <p>Product</p>
          <p>Quantity</p>
          <p>Subtotal</p>
          <p>Total</p>
        </div>
        <div className="cart__item">
          <img className="cart__image" src="https://placehold.co/400" />
          <p>Apple iPhone 9</p>
          <p>5</p>
          <p>$329.00</p>
          <p>$999.00</p>
        </div>
        <div className="cart__item">
          <img className="cart__image" src="https://placehold.co/400" />
          <p>Apple iPhone 933333</p>
          <p>5</p>
          <p>$329.00</p>
          <p>$999.00</p>
        </div>
      </div>
      <div className="cart__totals">
        <div>
          <p>Sub-Total</p>
          <p>$1000</p>
        </div>
        <div>
          <p>Estimated Shipping & Taxes</p>
          <p>$50</p>
        </div>
        <div>
          <p>Total</p>
          <p>$10500</p>
        </div>
        <div>
          <button>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
