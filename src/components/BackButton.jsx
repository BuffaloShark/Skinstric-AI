import React from "react";
import { useNavigate } from "react-router-dom";
import leftArrow from "../assets/skinstric-button-left.png";

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="btn__back">
          <button className="btn__back" onClick={handleBack}>
            <img src={leftArrow} className="btn__backArrow" alt="" />
            BACK</button>
        </div>
    );
};

export default BackButton;