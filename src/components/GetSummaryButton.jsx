import React from "react";
import rightArrow from "../assets/skinstric-button-right.png";

const GetSummaryButton = () => {
    return (
        <div className="btn__getSummary">
          <button className="btn__getSummary">
            <img src={rightArrow} className="btn__getSummary" alt="" />
            GET&nbsp;SUMMARY</button>
        </div>
    );
};

export default GetSummaryButton;