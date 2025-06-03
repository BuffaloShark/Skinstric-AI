import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import BackButton from "../components/BackButton";
import ProceedButton from "../components/ProceedButton";
import AccessCamera from "../components/AccessCamera";
import AccessGallery from "../components/AccessGallery";
import { useUser } from "../context/UserData";

const StartAnalysis = () => {
  const { name, location } = useUser();

  useEffect(() => {
    const sendData = async () => {
      try {
        const response = await fetch(
          "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, location }),
          }
        );
        const data = await response.json();
        console.log("API response:", data);
      } catch (error) {
        console.error("Error posting to API:", error);
      }
    };
    if (name && location) {
      sendData();
    }
  }, [name, location]);

  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleAccessCameraClick = () => {
    navigate("/loadingcamera");
  };

  const handleAccessGalleryClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result;
  
        try {
          const response = await fetch(
            "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ image: base64Image }),
            }
          );
  
          const prediction = await response.json();
          console.log("Prediction response:", prediction);
  
          navigate("/loadingresults", { state: { image: reader.result } }); 
        } catch (error) {
          console.error("Error uploading image to Phase Two:", error);
        }
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
              style={{ display: "none" }}
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
