import React from "react";
import HomeButton from "../components/HomeButton";
import BackButton from "../components/BackButton";
import ProceedButton from "../components/ProceedButton";
import AccessCamera from "../components/AccessCamera";
import AccessGallery from "../components/AccessGallery";

const StartAnalysis = () => {
  return (
    <>
      <div className="home__button--wrapper">
        <HomeButton />
      </div>
      <div className="startAnalysis__page">
        <div className="startAnalysis__header">TO START ANALYSIS</div>
        <main className="startAnalysis__main">
          <div className="startAnalysis__input--center">

            {/* ROTATING DIVS */}

        <div className="input__module">
            <AccessCamera />
        </div>
        
        <div className="input__module">
            <AccessGallery />
        </div>

            {/* END ROTATING DIVS */}

          </div>
        </main>
        <div className="back__button--wrapper">
            <BackButton />
        </div>
        <div className="proceed__button--wrapper">
            <ProceedButton />
        </div>
      </div>
    </>
  );
};

export default StartAnalysis;
