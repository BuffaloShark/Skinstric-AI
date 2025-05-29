import React from "react";

const ResetButton = ({ label = "RESET" }) => {
    return (
        <button className="nav__btn--reverse">{label}</button>
    );
};

export default ResetButton;