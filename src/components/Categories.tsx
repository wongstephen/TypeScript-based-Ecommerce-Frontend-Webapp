import React, { useEffect } from "react";
import { Product } from "../Interfaces";

interface Props {
  products: Product[];
  setFilterProducts: any;
}

const Categories = ({ products, setFilterProducts }: Props) => {
  function getCategories(products: Product[]): string[] {
    const cat: Array<string> = products.map((product) => {
      return product.category;
    });
    const uniqueCat: Set<string> = new Set([...cat]);
    const result: Array<string> = [...uniqueCat];
    return result;
  }

  function setCategories(products: Product[], cat: string): void {
    const filteredByCat = products.filter((product) => {
      return product.category === cat;
    });
    setFilterProducts(() => {
      return filteredByCat;
    });
  }

  function getLengthCategories(products: Product[], product: string): number {
    return products.filter((item) => {
      return item.category === product;
    }).length;
  }

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  function clearCategories(): void {
    return setFilterProducts(products);
  }
  return (
    <section className="cat">
      <p className="cat-filter">Filter categories:</p>
      {getCategories(products).map((product: string, idx) => {
        return (
          <button
            key={product + idx}
            className="cat-filter"
            id={product}
            onClick={() => setCategories(products, product)}
          >
            {product} ({getLengthCategories(products, product)})
          </button>
        );
      })}
      <button className="cat-filter" id="clear-btn" onClick={clearCategories}>
        Clear Filter
      </button>
    </section>
  );
};

export default Categories;
