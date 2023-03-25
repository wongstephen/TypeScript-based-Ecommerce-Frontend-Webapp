import React from "react";

const HeaderBanner = () => {
  return (
    <div className="header__banner">
      <img
        className="header__banner"
        src="/assets/female-friends-out-shopping-together.jpg"
      />

      <div className="header__content">
        <div className="header__content__sale">
          <p className="header__content__sale-title">Huge Sale</p>
          <p className="header__content__sale-description">
            Deals Up To 60% Retail Price
          </p>
          <button className="header__banner__button">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
