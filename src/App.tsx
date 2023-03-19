import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

interface Product {
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
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
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

  // useEffect(() => {
  //   console.log(products);
  // }, [products]);

  getJson();

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
      <main>
        {/* <section>
          <picture>
            <img
              src="/assets/landing-desktop.gif"
              className="welcome__image"
              alt="Gear Guide Box"
            />
          </picture>
        </section> */}
        <section className="product-grid">
          {products.length > 0 &&
            products.map((product) => {
              return <Card product={product} />;
            })}
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;

const Card = ({ product }) => {
  return (
    <div className="card">
      <picture>
        <source srcSet={product.images[0]} media="(min-width: 400px)" />
        <img src={product.images[1]} className="card__image" />
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
