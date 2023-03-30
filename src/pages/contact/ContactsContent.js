import React from "react";
import BtnGroup from "../../components/BtnGroup";

const ContactsContent = (props) => {
  const { image } = props;
  return (
    <div className="contactsContent">
      <div className="contactsContent__top">
        <div className="contactsContent__top__left">{image}</div>
        <div className="contactsContent__top__right">
          <div className="contactsContent__top__right--info">
            <h1>
              You can reach me any <br /> time🙂{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
              <br />
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              <br />
              aliquip ex ea commodo consequat. Duis aute irure dolor.
            </p>
            <p>Twitter: amirhwsin</p>
            <p>Github: amireshoon</p>
            <p>Dribble: amireshoon</p>
            <p>Telegram: GeekDreamer</p>
            <p>Email: amirhwsin@outlook.com</p>
          </div>
        </div>
      </div>
      <BtnGroup />
    </div>
  );
};

export default ContactsContent;
