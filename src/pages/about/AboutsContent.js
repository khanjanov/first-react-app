import React from "react";

function AboutsContent(props) {
  return (
    <div className="aboutscontent">
      <div className="aboutscontent__top">
        <div className="aboutscontent__top__img">{props.image}</div>
        {props.title}
      </div>
      <div className="aboutscontent__bottom">{props.text}</div>
    </div>
  );
}

export default AboutsContent;
