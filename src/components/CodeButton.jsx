import React from "react";

const CodeButton = ({ label = "ENTER CODE" }) => {
    return (
        <button className="nav__btn">{label}</button>
    );
};

export default CodeButton;