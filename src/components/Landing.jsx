import React from "react";
import { Link } from "react-router-dom";
import SideButton from "./SideButton";
import Introduce from "../pages/Introduce";

const Landing = () => {
  return (
    <div className="container">
      <main className="landing">
        <div className="landing__title">
          <h1>Sophisticated</h1>
          <h1>skincare</h1>
        </div>

        <SideButton label="DISCOVER A.I." direction="left" to="/" />
        <SideButton label="TAKE TEST" direction="right" to="/introduce" />

        <div className="landing__para">
          SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALISED ROUTINE
          TAILORED TO WHAT YOUR SKIN NEEDS.
        </div>
      </main>
    </div>
  );
};

export default Landing;
