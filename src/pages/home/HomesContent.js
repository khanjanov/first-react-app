import React from "react";
import BtnGroup from "../../components/BtnGroup";

const HomesContent = (props) => {
  const { topImg, title, text, bottomImg } = props;
  return (
    <div className="homesContent">
      <div className="homesContent__topImg">{topImg}</div>
      <div className="homesContent__info">
        {title}
        {text}
        <BtnGroup />
      </div>
      <div className="homesContent__bottomImg">{bottomImg}</div>
    </div>
  );
};

export default HomesContent;
