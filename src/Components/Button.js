import React from "react";

const Button = ({ active }) => {
  return (
    <div>
      <button className={active ? "red-btn" : "green-btn"}>Sign Up</button>
    </div>
  );
};

export default Button;
