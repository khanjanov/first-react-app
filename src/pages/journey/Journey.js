import { React, useState } from "react";
import WalkingGirl from "../../images/journey/walkingGirl.svg";

let timeLineInfo = [
  {
    id: 1,
    date: "2 January 2021",
    title: "The resolution, What am i gonna do?",
    text: "It’s all about the new year and works i have to do",
  },
  {
    id: 2,
    date: "29 February 2021",
    title: "Started designing what you are seeing right now!",
    text: "Yes in 2th of february i started designing this site",
  },
  {
    id: 3,
    date: "2 January 2021",
    title: "Gow - command line tool to manage works",
    text: "Gow is cli tool written in golang using cobra",
  },
  {
    id: 4,
    date: "1 March 2021",
    title: "Maybe it’s time to deploy...!",
    text: "Maybe in this day i completed the front and backend of this",
  },
];

const Journey = () => {
  const [info, setInfo] = useState(timeLineInfo);
  return (
    <div className="journey">
      <main className="main">
        <div className="main__top">
          <div className="main__top__left">
            <img src={WalkingGirl}></img>
          </div>
          <div className="main__top__right">
            <h1>
              The resolution, What am <br /> I gonna do?
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing <br /> and
              typesetting industry. Lorem Ipsum has been <br /> the industry's
              standard
            </p>
          </div>
        </div>
        <div className="main__bottom">
          <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
            <br /> aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br /> Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            <br /> occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum."
          </p>
          <p>
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC
            <br /> "Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem
            <br /> aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim
            <br /> ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            <br /> voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci
            <br /> velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut
            <br /> enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            <br /> consequatur? Quis autem vel eum iure reprehenderit qui in ea
            voluptate velit esse quam nihil molestiae consequatur,
            <br /> vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?"
          </p>
          <p>
            1914 translation by H. Rackham
            <br /> "But I must explain to you how all this mistaken idea of
            denouncing pleasure and praising pain was born and I will give
            <br /> you a complete account of the system, and expound the actual
            teachings of the great explorer of the truth, the
            <br />
            master-builder of human happiness. No one rejects, dislikes, or
            avoids pleasure itself, because it is pleasure, but
            <br /> because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful.
            <br /> Nor again is there anyone
          </p>
        </div>
      </main>
      <aside>
        <h2>Time line</h2>
        <select>
          <option selected>2021</option>
          <option>2022</option>
          <option>2023</option>
        </select>
        {info.map((info) => {
          return (
            <div className="timelineInfo">
              <p>{info.date}</p>
              <div className="timelineInfo__content">
                <h4>{info.title}</h4>
                <p>{info.text}</p>
              </div>
            </div>
          );
        })}
      </aside>
    </div>
  );
};

export default Journey;
