import React from "react";
import SideButton from "./SideButton";

const Landing = () => {
  return (
    <div className="container">
      <main className="landing">
        <div className="side__btn--wrap-left">
        {/* <div className="side__btn left">
          <img src={buttonLeft} alt="" className="btn__icon" />
          <p>DISCOVER A.I.</p>
        </div> */}
        </div>

        <div className="landing__title">
          <h1>Sophisticated</h1>
          <h1>Skincare</h1>
        </div>

    <SideButton label="DISCOVER A.I." direction="left" />
    <SideButton label="TAKE TEST" direction="right" />

{/* <div className="side__btn--wrap-right">
        <div className="side__btn right">
          <p>TAKE TEST</p><img src={buttonRight} alt="" className="btn__icon" />
        </div>
        </div> */}

        <div className="landing__para">
          SKINSTRIC DEVELOPED AN A.I. THAT CREATES A HIGHLY-PERSONALISED ROUTINE
          TAILORED TO WHAT YOUR SKIN NEEDS.
        </div>
      </main>
    </div>
  );
};

export default Landing;
