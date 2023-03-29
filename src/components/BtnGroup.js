import React from "react";

const BtnGroup = () => {
  return (
    <div className="btnGroup">
      <button className="btnGroup__aboutBtn">
        {" "}
        <a href="#"> About me</a>
      </button>
      <button className="btnGroup__portfoliosBtn">
        <a href="#">😮Let's see portfolios</a>
      </button>
    </div>
  );
};

export default BtnGroup;
