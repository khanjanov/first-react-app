import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul className="header__navs">
        <li> <NavLink to='./home'>Home</NavLink> </li>
        <li> <NavLink to="about">About</NavLink> </li>
        <li> <NavLink to="contact">Contact</NavLink> </li>
        <li> <NavLink to="portfolios">Portfolios</NavLink> </li>
        <li> <NavLink to="journey">Journey</NavLink> </li>
        <li> <NavLink to="blog">Blog</NavLink> </li>
      </ul>
    </div>
  );
};

export default Header;
