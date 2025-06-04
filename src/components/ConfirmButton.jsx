import React from "react";

const ConfirmButton = ({ label = "CONFIRM", onClick }) => {

    const handleClick = () => {
    console.log("ConfirmButton clicked!");
    onClick(); 
  };

  return (
    <button className="nav__btn" onClick={handleClick}>
      {label}
    </button>
  );
};

export default ConfirmButton;
