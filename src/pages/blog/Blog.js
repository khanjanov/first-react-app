import { React, useState } from "react";
import BlogsContent from "./BlogsContent";
import YellowTrousersGirl from "../../images/blog/yellowTrousersGirl.svg";
import TwoMen from "../../images/blog/twoMen.svg";
import AliveSoap from "../../images/blog/aliveSoap.svg";
import WomenWithWine from "../../images/blog/womenWithWine.svg";
import LaughingThing from "../../images/blog/laughingThing.svg";

let cards = [
  {
    id: 1,
    image: YellowTrousersGirl,
    title: "There is more than you know",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    link: "Read more",
  },
  {
    id: 2,
    image: TwoMen,
    title: "There is more than you know",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    link: "Read more",
  },
  {
    id: 3,
    image: AliveSoap,
    title: "There is more than you know",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    link: "Read more",
  },
  {
    id: 4,
    image: WomenWithWine,
    title: "There is more than you know",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    link: "Read more",
  },
  {
    id: 5,
    image: LaughingThing,
    title: "There is more than you know",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    link: "Read more",
  },
];

const Blog = () => {
  const [card, setCard] = useState(cards);
  return (
    <div>
      <BlogsContent card = {card} />
    </div>
  );
};

export default Blog;
