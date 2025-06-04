import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideButton from "./SideButton";
import Introduce from "../pages/Introduce";

const Landing = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="container">
      <main className="landing">
        <div
          className={`landing__title ${
            hovered === "left"
              ? "move-right align-right"
              : hovered === "right"
              ? "move-left align-left"
              : ""
          }`}
        >
          <h1>Sophisticated</h1>
          <h1>skincare</h1>
        </div>
        <button className="not-functional">
          <SideButton
            label="DISCOVER A.I."
            direction="left"
            to="/"
            onHover={() => setHovered("left")}
            onLeave={() => setHovered(null)}
            hidden={hovered === "right"}
          />
        </button>
        <SideButton
          label="TAKE TEST"
          direction="right"
          to="/introduce"
          onHover={() => setHovered("right")}
          onLeave={() => setHovered(null)}
          hidden={hovered === "left"}
        />

        <div className="landing__para">
          SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALISED ROUTINE
          TAILORED TO WHAT YOUR SKIN NEEDS.
        </div>
      </main>
    </div>
  );
};

export default Landing;
