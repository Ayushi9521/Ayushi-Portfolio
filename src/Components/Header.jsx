/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div className="Header-sec">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
      <a href="#footer">Contact</a>
    </div>
  );
};

export default Header;
