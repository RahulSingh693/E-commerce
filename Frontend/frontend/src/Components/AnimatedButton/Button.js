import React from "react";
import "./Button.css"

const Button = ({text}) => {
  return (
    <div className="btn">
      <a className="text-white decoration-0" href="#">{text}</a>
    </div>
  );
};

export default Button;