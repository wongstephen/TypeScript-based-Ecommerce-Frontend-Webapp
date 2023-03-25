import React from "react";
import { Product } from "../Interfaces";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const navigate: NavigateFunction = useNavigate();

  function handleClick(): void {
    navigate(`/product/${product.title}-${product.id}`);
  }
  return (
    <div className="card__overlay" onClick={handleClick}>
      <div className="card">
        <picture>
          <img src={product.thumbnail} className="card__image" />
        </picture>
        <div className="card__content">
          <p className="card__category">{product.category}</p>
          <h2 className="card__title">
            {product.brand} - {product.title}
          </h2>
          <p className="card__price">${product.price}</p>
        </div>
      </div>
      <div className="card__overlay__container">
        <p>View Item</p>
      </div>
    </div>
  );
};
