import React, { useState } from "react";
import { Product } from "../Interfaces";
import { ProductCard } from "./ProductCard";

interface Props {
  filterProducts: Product[];
}

const ProductGrid = ({ filterProducts }: Props) => {
  return (
    <section className="product-grid">
      {filterProducts.length > 0 &&
        filterProducts.map((product: Product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
    </section>
  );
};

export default ProductGrid;
