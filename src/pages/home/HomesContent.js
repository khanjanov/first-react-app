import React from "react";
import BtnGroup from "../../components/BtnGroup";

const HomesContent = (props) => {
  return (
    <div className="homesContent">
      <div className="homesContent__topImg">{props.topImg}</div>
      <div className="homesContent__info">
        {props.title}
        {props.text}
        <BtnGroup />
      </div>
      <div className="homesContent__bottomImg">{props.bottomImg}</div>
    </div>
  );
};

export default HomesContent;
