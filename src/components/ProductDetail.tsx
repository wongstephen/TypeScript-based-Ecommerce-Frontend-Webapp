import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProductContext from "../hooks/useProductContext";
import { Product } from "../Interfaces";
import useShoppingCartContext from "../hooks/useShoppingCartContext";
import { ShoppingCart } from "../context/ShoppingCartContext";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import useAxios from "../hooks/useAxios";
interface Props {
  products: Product[];
}
const ProductDetail = () => {
  const [featured, setFeatured] = useState<string>("productDetail.images[0]");
  const [quantity, setQuantity] = useState<number>(1);
  const { products }: Props = useProductContext();
  const [productDetail, setProductDetail] = useState<Product | null>(null);
  const { id } = useParams();
  const { setShoppingCart } = useShoppingCartContext();

  const propId: string = id.slice(id.lastIndexOf("-") + 1);

  // useEffect(() => console.log(productDetail), [productDetail]);

  interface axiosType {
    refetch: () => void;
    loading: boolean;
  }
  const { refetch }: axiosType = useAxios();

  useEffect(() => {
    setProductDetail(() => {
      const [ojb] = products.filter((item) => {
        return item.id.toString() === propId.toString();
      });
      return ojb;
    });
  }, [products]);

  useEffect(() => {
    setFeatured(() => {
      return productDetail?.images[0];
    });
  }, [productDetail]);

  function handleFeatureClick(idx: number): void {
    setFeatured(() => productDetail.images[idx]);
  }

  function handleQuantityClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    if (e.currentTarget.name === "add") {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity === 1) {
        return;
      } else {
        setQuantity((prev) => prev - 1);
      }
    }
  }

  function handleCartClick(): void {
    setShoppingCart((prev: ShoppingCart) => {
      if (prev[id]) {
        let qty = prev[id].quantity + quantity;

        return {
          ...prev,
          [id]: {
            ...prev[id],
            quantity: qty,
          },
        };
      } else {
        return {
          ...prev,
          [id]: {
            quantity: quantity,
            price: productDetail.price,
            title: productDetail.title,
          },
        };
      }
    });
  }

  if (!productDetail) {
    return <div>loading</div>;
  } else {
    return (
      <div className="detail__container">
        <div className="detail__image__container">
          <div className="detail__image-feature detail__image ">
            <img src={featured} alt="featured image" />
          </div>
          {productDetail &&
            productDetail.images.length > 1 &&
            productDetail.images.map((image, idx) => {
              return (
                <div
                  key={image + idx}
                  className={`detail__image ${`modal__detail` + idx} detail__modal`}
                  onClick={() => handleFeatureClick(idx)}
                >
                  <img src={image} alt={image + " " + idx} />
                </div>
              );
            })}
        </div>
        <div className="detail__content">
          <p className="detail__category">
            <Link to="/">Home</Link> / {productDetail.category}
          </p>
          <h2 className="detail__title">
            {productDetail.brand} {productDetail.title}
          </h2>
          <hr className="detail__line" />
          <p className="detail__price">
            <span>$</span>
            {productDetail.price}
          </p>
          <p className="detail__desc">{productDetail.description}</p>
          <div className="detail__container-qty">
            <button
              className="detail__button-qty"
              name="minus"
              onClick={handleQuantityClick}
            >
              -
            </button>
            <input
              className="detail_input-qty"
              value={quantity}
              aria-readonly
              readOnly
              type="text"
            ></input>
            <button
              className="detail__button-qty"
              name="add"
              onClick={handleQuantityClick}
            >
              +
            </button>
          </div>

          <button className="detail__button-cart" onClick={handleCartClick}>
            Add to Cart
          </button>
          <hr className="detail__line" />
          <div className="social__container">
            <button className="social__icon social__icon-fb">
              <FaFacebookF />
            </button>
            <button className="social__icon social__icon-ig">
              <FaInstagram />
            </button>
            <button className="social__icon social__icon-tw">
              <FaTwitter />
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetail;
