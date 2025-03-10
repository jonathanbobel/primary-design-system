import React from "react";

const Button = (props) => {
  return (
    <button
      className={props.className}
      onClick={props.action}
      label={props.label}
    >
      {props.title}
    </button>
  );
};

export default Button;
