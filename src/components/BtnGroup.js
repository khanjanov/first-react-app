import React from "react";
import { NavLink } from "react-router-dom";

const BtnGroup = () => {
  return (
    <div className="btnGroup">
      <button className="btnGroup__aboutBtn">
        <NavLink to="/about"> About me</NavLink>
      </button>
      <button className="btnGroup__portfoliosBtn">
        <NavLink to="/portfolios">😮Let's see portfolios</NavLink>
      </button>
    </div>
  );
};

export default BtnGroup;
