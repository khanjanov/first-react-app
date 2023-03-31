import { React, useState } from "react";
import PortfoliosContent from "./PortfoliosContent";
import WalkingMushroom from "../../images/portfolios/walkingMushroom.svg";
import Deer from "../../images/portfolios/deer.svg";
import CurlyGirl from "../../images/portfolios/curlyGirl.svg";
import SleepingThing from "../../images/portfolios/sleepingThing.svg";
import Death from "../../images/portfolios/death.svg";
import GirlWithCat from "../../images/portfolios/girlWithCat.svg";

let cards = [
  {
    id: 1,
    image: WalkingMushroom,
    title: "There is more than you know",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    link: "Read more",
  },
  {
    id: 2,
    image: Deer,
    title: "There is more than you know",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    link: "Read more",
  },
  {
    id: 3,
    image:  CurlyGirl ,
    title: "There is more than you know",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    link: "Read more",
  },
  {
    id: 4,
    image:  SleepingThing ,
    title: "There is more than you know",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    link: "Read more",
  },
  {
    id: 5,
    image:  Death ,
    title: "There is more than you know",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    link: "Read more",
  },
  {
    id: 6,
    image:  GirlWithCat ,
    title: "There is more than you know",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    link: "Read more",
  },
];

const Portfolios = () => {
  const [card, setCard] = useState(cards);
  return (
    <div>
      <PortfoliosContent card={card} />
    </div>
  );
};

export default Portfolios;
