import React from "react";
import HomesContent from "./HomesContent";
import HomeTopImg from "../../images/home/sittingWithComp.svg";
import HomeBottomImg from "../../images/home/bottomHand.svg";
import BtnGroup from "../../components/BtnGroup";

const Home = () => {
  return (
    <div>
      <HomesContent
        topImg={<img src={HomeTopImg} />}
        title={
          <h1>
            Hey there 👋 <br /> I am Amirhossein
          </h1>
        }
        text={
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy text
            <br />
            ever since the 1500s, when an unknown printer took a galley of type
            <br />
            and scrambled it to make a type specimen book.
          </p>
        }
        bottomImg={<img src={HomeBottomImg} />}
      />
    </div>
  );
};

export default Home;
