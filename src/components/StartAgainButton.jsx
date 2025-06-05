import React from "react";
import { Link, useNavigate } from "react-router-dom";
import leftArrow from "../assets/skinstric-button-left.png";

const StartAgainButton = () => {
    const navigate = useNavigate();

    return (
        <div className="btn__back">
            <Link to="/startAnalysis">
          <button className="btn__back">
            <img src={leftArrow} className="btn__backArrow" alt="" />
            BACK</button>
            </Link>
        </div>
    );
};

export default StartAgainButton;