import React from "react";
import { Product } from "../Interfaces";

interface Props {
  product: Product;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalData: React.Dispatch<React.SetStateAction<Product>>;
}

export const ProductCard = ({ product, setShowModal, setModalData }: Props) => {
  function handleClick(): void {
    setShowModal(() => true);
    setModalData(() => product);
  }
  return (
    <div className="card" onClick={handleClick}>
      <picture>
        <img src={product.thumbnail} className="card__image" />
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
