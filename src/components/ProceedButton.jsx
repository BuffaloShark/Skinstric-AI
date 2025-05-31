import React from "react";
import rightArrow from "../assets/skinstric-button-right.png";

const ProceedButton = () => {
    return (
        <div className="btn__proceed">
          <button className="btn__proceed">
            <img src={rightArrow} className="btn__proceedArrow" alt="" />
            PROCEED</button>
        </div>
    );
};

export default ProceedButton;