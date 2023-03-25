import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <p>
        GearGuide Copyright {date}. This page contains affiliate links. If you
        choose to purchase after clicking a link, I may receive a commission at
        no extra cost to you. But it actually doesn't, this is just placeholder
        text.
      </p>
    </footer>
  );
};

export default Footer;
