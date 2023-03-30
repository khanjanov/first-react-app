import React from "react";

function AboutsContent(props) {
  const { image, title, text } = props;
  return (
    <div className="aboutscontent">
      <div className="aboutscontent__top">
        <div className="aboutscontent__top__img">{image}</div>
        {title}
      </div>
      <div className="aboutscontent__bottom">{text}</div>
    </div>
  );
}

export default AboutsContent;
