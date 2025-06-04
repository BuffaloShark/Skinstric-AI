import React from "react";
import { Link } from "react-router-dom";

const CodeButton = ({ label = "ENTER CODE" }) => {
    return (
        <Link to="/">
        <button className="nav__btn not-functional">{label}</button>
        </Link>
    );
};

export default CodeButton;