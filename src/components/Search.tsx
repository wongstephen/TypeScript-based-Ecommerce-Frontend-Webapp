import React from "react";
import { Product } from "../Interfaces";
import { AiOutlineSearch } from "react-icons/ai";

interface Props {
  products: Product[];
  setFilterProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
const Search = ({ products, setFilterProducts }: Props) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const search = products.filter((prev) => {
      return (
        prev.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        prev.category.toLowerCase().includes(e.target.value.toLowerCase()) ||
        prev.brand.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setFilterProducts(() => {
      return search;
    });
  }

  function handleSearch(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log(e);
  }

  return (
    <section className="search">
      <label htmlFor="seachInput" className="screen-reader">
        Search
      </label>
      <form onSubmit={handleSearch} className="search">
        <input
          placeholder="Search"
          id="seachInput"
          name="seachInput"
          type="search"
          className="search"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <button aria-label="Search Products" className="search">
          <AiOutlineSearch />
        </button>
      </form>
    </section>
  );
};

export default Search;
