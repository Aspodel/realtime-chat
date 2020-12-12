import React, { useState } from "react";

const ChatInput = (props) => {
  const [data, setData] = useState({
    user: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isUser = data.user && data.user !== "";
    const isMessage = data.message && data.message !== "";

    if (isUser && isMessage) {
      props.sendMessage(data.user, data.message);
      setData({ ...data, message: "" });
    } else {
      alert("Please input user or message!!!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user">User:</label>
      <br />
      <input
        type="text"
        name="user"
        id="user"
        value={data.user}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="message">Message:</label> <br />
      <input
        type="text"
        name="message"
        id="message"
        value={data.message}
        onChange={handleChange}
      />
      <br />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
};

export default ChatInput;
