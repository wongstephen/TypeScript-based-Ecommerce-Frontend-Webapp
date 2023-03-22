import React, { useEffect, useState } from "react";
import { Product } from "../Interfaces";

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalData: Product;
}

const starSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="modal__image-star"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
};

const starRating = (rating: number): string[] => {
  const roundNum = Math.round(rating);
  const arr = new Array(roundNum).fill("");
  return arr;
};

// todo: update modal data type
const ProductModal = ({ showModal, setShowModal, modalData }: Props) => {
  const [featureImage, setFeatureImage] = useState<string>();

  function closeModal(e: React.MouseEvent): void {
    setShowModal(() => false);
  }

  useEffect(
    () => modalData && setFeatureImage(() => modalData.images[0]),
    [modalData]
  );

  function handleCartClick(): void {
    console.log("click");
    // setShoppingCart((prev: ShoppingCart) => {
    //   if (prev[modalData.id]) {
    //     const newQuantity = prev[modalData.id].quantity++;
    //     return (prev[modalData.id].quantity = newQuantity);
    //   } else {
    //     return [...prev, { id: modalData.id, quantity: 1 }];
    //   }
    // });
  }

  if (modalData) {
    return (
      <div
        id="openModal"
        className={`modal ${!showModal && "display-none"}`}
        onClick={closeModal}
        aria-label="Close Product Card"
      >
        <div
          className="modal__container"
          id="modalDialog"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closeModal}
            className="modal__button-close"
            aria-label="Close Product Card"
          >
            X
          </button>

          <div className="modal__breadcrumb">
            <p>
              <span>{modalData.category}</span> {modalData.brand}
            </p>
          </div>
          <div className="modal__content">
            <div className="modal__content-grid">
              <div className="modal__content-text">
                <h2 className="modal__title">{modalData.title}</h2>
                <p className="modal__brand">{modalData.brand}</p>
                <div>
                  {starRating(modalData.rating).map((star, idx) => {
                    return <span key={idx}>{starSVG()}</span>;
                  })}
                  <p className="modal__rating">{modalData.rating}</p>
                </div>
                <p className="modal__description">{modalData.description}</p>
              </div>
              <div className="modal__button-cart__container">
                <p className="modal__price">${modalData.price}</p>

                <button
                  className="modal__button-cart"
                  aria-label="add product to cart"
                  onClick={handleCartClick}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="modal__image-container">
              <div className="modal__image modal__image-feature">
                <img src={featureImage} alt="featured product" />
              </div>
              {modalData.images.length > 1 &&
                modalData.images.map((image, idx) => {
                  return (
                    <div
                      key={image + idx}
                      className={`modal__image ${`modal__image` + idx}`}
                      onClick={() => setFeatureImage(() => image)}
                    >
                      <img src={image} alt={image + " " + idx} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductModal;
