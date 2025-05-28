import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link to="/">
      <div className="logo">
        SKINSTRIC &nbsp;<span className="bracket">[</span>{" "}
        <span className="intro">&nbsp;INTRO&nbsp;</span>{" "}
        <span className="bracket">]</span>
      </div>
    </Link>
  );
};

export default HomeButton;
