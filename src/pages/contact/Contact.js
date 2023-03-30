import React from "react";
import ContactsContent from "./ContactsContent";
import ContactsImg from "../../images/contact/contactStanding.svg";
const Contact = () => {
  return (
    <div>
      <ContactsContent image={<img src={ContactsImg} />} />
    </div>
  );
};

export default Contact;
