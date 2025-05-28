import React from "react";
import { Link } from "react-router-dom";
import rightArrow from "../assets/skinstric-button-right.png";
import leftArrow from "../assets/skinstric-button-left.png";

const SideButton = ({ label, direction = "right", to }) => {
  const iconSrc = direction === "right" ? rightArrow : leftArrow;

  const content = (
    <div className={`side__btn--wrapper ${direction}`}>
      <div className="side__btn--content">
        <span>{label}</span>
        <img src={iconSrc} alt={`${direction} arrow`} className="arrow" />
      </div>
    </div>
  );

  return to ? <Link to={to}>{content}</Link> : content;
  
};

export default SideButton;
