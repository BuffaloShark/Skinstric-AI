import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import BackButton from "../components/BackButton";
import ProceedButton from "../components/ProceedButton";
import AccessCamera from "../components/AccessCamera";
import AccessGallery from "../components/AccessGallery";

const StartAnalysis = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleAccessCameraClick = () => {
    navigate("/loadingcamera");
  };

  const handleAccessGalleryClick = () => {
    fileInputRef.current.click();
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        navigate("/loadingresults", {state: {image: reader.result}});
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="home__button--wrapper">
        <HomeButton label="INTRO" />
      </div>
      <div className="startAnalysis__page">
        <div className="startAnalysis__header">TO START ANALYSIS</div>
        <main className="startAnalysis__main">
          <div className="startAnalysis__input--center">

            <div className="input__module" onClick={handleAccessCameraClick}>
              <AccessCamera />
            </div>

            <div className="input__module" onClick={handleAccessGalleryClick}>
              <AccessGallery />
            </div>
            <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{display: "none"}}
            />

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
