import React, { useState } from "react";
import { Product } from "../Interfaces";
import { ProductCard } from "./ProductCard";
import ProductModal from "./ProductModal";

interface Props {
  filterProducts: Product[];
}

const ProductGrid = ({ filterProducts }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Product>();
  return (
    <section className="product-grid">
      {filterProducts.length > 0 &&
        filterProducts.map((product: Product) => {
          return (
            <ProductCard
              product={product}
              key={product.id}
              setShowModal={setShowModal}
              setModalData={setModalData}
            />
          );
        })}
      <ProductModal
        showModal={showModal}
        setShowModal={setShowModal}
        modalData={modalData}
      />
    </section>
  );
};

export default ProductGrid;
