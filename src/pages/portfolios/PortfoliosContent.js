import React from "react";

const PortfoliosContent = (props) => {
  const { card } = props;
  return (
    <div className="portfoliosContent">
      {card.map((item) => {
        return (
          <div className="portfoliosContent__card">
            <div className="portfoliosContent__card__left">
              <img src={item.image} />
            </div>
            <div className="portfoliosContent__card__right">
              <div className="portfoliosContent__card__right--top">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <div className="portfoliosContent__card__right--bottom">
                {item.link}
                <i class="fa-solid fa-xs fa-arrow-up-right-from-square"></i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PortfoliosContent;
