import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

type Product = {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  async function getJson(): Promise<void> {
    try {
      setLoading(true);
      const res = await axios.get("https://dummyjson.com/products");
      const data: Product[] = res.data.products;
      setProducts(() => {
        return data;
      });
    } catch (err) {
      setError(true);
      throw err;
    } finally {
      setLoading(false);
    }
  }

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

  function clearCategories(): void {
    return setFilterProducts(products);
  }

  useEffect(() => {
    getJson();
  }, []);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  return (
    <div className="app">
      <header>
        <div className="header__logo">
          <img
            src="/assets/open-box-small.gif"
            alt="open box"
            className="header__image"
          />
          <h1 className="header__title">gearguide</h1>
        </div>
        <nav></nav>
      </header>
      {loading ? (
        <p>loading</p>
      ) : (
        <main>
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
                  {product}
                </button>
              );
            })}
            <button
              className="cat-filter"
              id="clear-btn"
              onClick={clearCategories}
            >
              Clear Filter
            </button>
          </section>
          <section className="product-grid">
            {filterProducts.length > 0 &&
              filterProducts.map((product: Product) => {
                return <Card product={product} key={product.id} />;
              })}
          </section>
        </main>
      )}
      <footer></footer>
    </div>
  );
}

export default App;

const Card = ({ product }) => {
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

{
  /* <a href="https://www.flaticon.com/free-icons/box" title="box icons">Box icons created by Freepik - Flaticon</a> */
}
