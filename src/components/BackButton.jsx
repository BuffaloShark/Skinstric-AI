import React from "react";
import leftArrow from "../assets/skinstric-button-left.png";

const BackButton = () => {
    return (
        <div className="btn__back">
          <button className="btn__back">
            <img src={leftArrow} className="btn__back" alt="" />
            BACK</button>
        </div>
    );
};

export default BackButton;