import React from "react";

function Contact(Props) {
  return (
    <div>
      <h3>Contact Form - {Props.name}</h3>
      <label>Email </label>
      <input type="text"></input>
      <br />
      <label>Message </label>
      <input type="text"></input>
      <br />
      <button>Send</button>
    </div>
  );
}

export default Contact;
