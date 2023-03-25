import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProductContext from "../hooks/useProductContext";
import { Product } from "../Interfaces";
import useShoppingCartContext from "../hooks/useShoppingCartContext";
import { ShoppingCart } from "../context/ShoppingCartContext";

interface Props {
  products: Product[];
}
const ProductDetail = () => {
  const [featured, setFeatured] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const { products }: Props = useProductContext();
  const { id } = useParams();
  const { setShoppingCart } = useShoppingCartContext();

  const propId: string = id.slice(id.lastIndexOf("-") + 1);

  useEffect(() => {
    setFeatured(() => product[0].images[0]);
  }, []);

  function getProductDetails(): Product[] {
    return products.filter((product) => {
      return product.id.toString() === propId;
    });
  }
  const product = getProductDetails();

  function handleFeatureClick(idx: number): void {
    setFeatured(() => product[0].images[idx]);
  }
  function handleQuantityClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    if (e.currentTarget.name === "add") {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity === 1) {
        return;
      } else {
        setQuantity((prev) => prev - 1);
      }
    }
  }

  function handleCartClick(): void {
    setShoppingCart((prev: ShoppingCart) => {
      if (prev[id]) {
        let qty = prev[id].quantity + quantity;

        return {
          ...prev,
          [id]: {
            ...prev[id],
            quantity: qty,
          },
        };
      } else {
        return {
          ...prev,
          [id]: {
            quantity: quantity,
            price: product[0].price,
            title: product[0].title,
          },
        };
      }
    });
  }

  return (
    <div className="detail__container">
      <div className="detail__image__container">
        <div className="detail__image-feature detail__image ">
          <img src={featured} alt="featured image" />
        </div>
        {product[0].images.length > 1 &&
          product[0].images.map((image, idx) => {
            return (
              <div
                key={image + idx}
                className={`detail__image ${`modal__detail` + idx}`}
                onClick={() => handleFeatureClick(idx)}
              >
                <img src={image} alt={image + " " + idx} />
              </div>
            );
          })}
      </div>
      <div className="detail__content">
        <p className="detail__category">Home / {product[0].category}</p>
        <h2 className="detail__title">
          {product[0].brand} {product[0].title}
        </h2>
        <hr className="detail__line" />
        <p className="detail__price">
          <span>$</span>
          {product[0].price}
        </p>
        <p className="detail__desc">{product[0].description}</p>
        <div className="detail__container-qty">
          <button
            className="detail__button-qty"
            name="minus"
            onClick={handleQuantityClick}
          >
            -
          </button>
          <input
            className="detail_input-qty"
            value={quantity}
            type="number"
          ></input>
          <button
            className="detail__button-qty"
            name="add"
            onClick={handleQuantityClick}
          >
            +
          </button>
        </div>
        <button className="detail__button-cart" onClick={handleCartClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
