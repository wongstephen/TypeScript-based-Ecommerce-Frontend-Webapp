import React from "react";
import { Product } from "../Interfaces";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="card">
      <picture>
        <img src={product.images[0]} className="card__image" />
      </picture>
      <div className="card__content">
        <h2 className="card__title">
          {product.title} <span className="card__price">${product.price}</span>
        </h2>
        <p className="card__description">{product.description}</p>
      </div>
    </div>
  );
};
