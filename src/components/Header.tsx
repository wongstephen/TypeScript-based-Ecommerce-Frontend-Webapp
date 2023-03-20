import React from "react";

const Header = () => {
  return (
    <>
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
      <picture className="header__banner">
        <source
          srcSet="/assets/desktop-banner.png"
          media="(min-width: 700px)"
        />
        <img className="header__banner" src="/assets/mobile-banner.png" />
      </picture>
    </>
  );
};

export default Header;
