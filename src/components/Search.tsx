import React from "react";
import { Product } from "../Interfaces";

interface Props {
  products: Product[];
  setFilterProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
const Search = ({ products, setFilterProducts }: Props) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const search = products.filter((prev) => {
      return (
        prev.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        prev.category.toLowerCase().includes(event.target.value.toLowerCase())
      );
    });
    setFilterProducts(() => {
      return search;
    });
  }
  return (
    <section className="search">
      <label htmlFor="seachInput" className="screen-reader">
        Search
      </label>
      <input
        placeholder="Search"
        id="seachInput"
        name="seachInput"
        type="search"
        onChange={(event) => {
          handleChange(event);
        }}
      />
    </section>
  );
};

export default Search;
