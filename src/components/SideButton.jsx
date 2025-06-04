import React, { useState } from "react";
import { Link } from "react-router-dom";
import rightArrow from "../assets/skinstric-button-right.png";
import rightArrowHover from "../assets/button-icon-expanded.png";
import leftArrow from "../assets/skinstric-button-left.png";
import leftArrowHover from "../assets/button-icon-expanded-left.png";

const SideButton = ({
  label,
  direction = "right",
  to,
  onHover,
  onLeave,
  hidden,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const iconSrc = direction === "right" 
  ? isHovered ? rightArrowHover : rightArrow 
  : isHovered ? leftArrowHover : leftArrow;

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover?.();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onLeave?.();
  }

  return (
    <div
      className={`side__btn--wrapper ${direction} ${hidden ? "hide" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={to} className="side__btn--content">
        <span>{label}</span>
        <img src={iconSrc} alt={`${direction} arrow`} className="arrow" />
      </Link>
    </div>
  );
};

export default SideButton;
