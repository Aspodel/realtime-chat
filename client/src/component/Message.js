import React from "react";

const Message = (props) => {
  return (
    <div>
      <p>
        <strong>{props.user} </strong>says:{" "}
      </p>
      <p>{props.message}</p>
    </div>
  );
};

export default Message;
