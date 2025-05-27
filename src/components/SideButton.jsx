import React from "react";
import rightArrow from "../assets/skinstric-button-right.png";
import leftArrow from "../assets/skinstric-button-left.png";

const SideButton = ({ label, direction = "right" }) => {
  const iconSrc = direction === "right" ? rightArrow : leftArrow;

  return (
    <div className={`side__btn--wrapper ${direction}`}>
      <div className="side__btn--content">
        <span>{label}</span>
        <img src={iconSrc} alt={`${direction} arrow`} className="arrow" />
      </div>
    </div>
  );
};

export default SideButton;
