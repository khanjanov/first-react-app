import React from "react";

const BlogsContent = (props) => {
  const { card } = props;
  return (
    <div className="blogsContent">
      {card.map((item) => {
        return (
          <div className="blogsContent__card">
            <div className="blogsContent__card__top">
              <img src={item.image} />
            </div>
            <div className="blogsContent__card__bottom">
              <div className="blogsContent__card__bottom--top">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <div className="blogsContent__card__bottom--bottom">
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

export default BlogsContent;
{
  /* <i class="fa-solid fa-xs fa-arrow-up-right-from-square"></i> */
}
