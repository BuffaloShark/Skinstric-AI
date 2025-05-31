import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import BackButton from "../components/BackButton";
import ProceedButton from "../components/ProceedButton";
import iconFlip from "../assets/icon-flip.png";
import iconCapture from "../assets/icon-capture.png";
import camera from "../assets/camera.png";

const LoadingCamera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [facingMode, setFacingMode] = useState("environment");
  const [photoTaken, setPhotoTaken] = useState(false);
  const [showGreatShot, setShowGreatShot] = useState(false);
  const navigate = useNavigate();
  const streamRef = useRef(null);

  const startCamera = async () => {
    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode },
        audio: false,
      });

      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      startCamera();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) startCamera();
  }, [facingMode]);

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const takePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (canvas && video) {
      const ctx = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageDataUrl = canvas.toDataURL("image/jpeg");
      video.style.display = "none";
      canvas.style.display = "block";

      setPhotoTaken(true);
      setShowGreatShot(true);

      setTimeout(() => {
        navigate("/loadingresults", { state: { image: imageDataUrl } });
      }, 3000);
    }
  };

  const flipCamera = () => {
    setFacingMode((prev) => (prev === "environment" ? "user" : "environment"));
  };

  return (
    <div className="loading-camera__container">
      {isLoading ? (
        <main className="loading-camera__main">
        <div className="rotating__wrapper">
          <div className="rotating__box rotating__box--6"></div>
          <div className="rotating__box rotating__box--5"></div>
          <div className="rotating__box rotating__box--4"></div>
          <div className="input__overlay">
            <div className="icon__centered--camera-loading">
              <img src={camera} className="icon--loading" alt="" />
              <div className="camera-loading__input--header">
                SETTING UP CAMERA...
              </div>
            </div>
          </div>
        </div>
        <div className="camera__loading--wrapper">
        <div className="camera__loading--list">
          <p className="camera__loading--para">
            TO GET BETTER RESULTS, BE SURE TO HAVE:
          </p>
          <ul className="loading__list">
            <li className="loading__list--item">&#9671; NEUTRAL EXPRESSION</li>
            <li className="loading__list--item">&#9671; FRONTAL POSE</li>
            <li className="loading__list--item">&#9671; ADEQUATE LIGHTING</li>
          </ul>
        </div>
      </div>
      </main>
      
      ) : (
        <>
          <video
            ref={videoRef}
            className="camera__preview"
            autoPlay
            playsInline
            muted
          />
          <canvas ref={canvasRef}
          className="camera__preview"
          style={{ display: photoTaken ? "block" : "none" }} />

          <div className="camera__ui-overlay">
            <div className="home__button--wrapper">
            <HomeButton label="ANALYSIS" />
            </div>
            <div className="back__button--wrapper">
            <BackButton />
            </div>
            {photoTaken && 
            (<div className="proceed__button--wrapper">
                <ProceedButton />
            </div>
            )}
            <div className="camera-ui__buttons">
              {/* <button className="icon-button icon-flip" onClick={flipCamera}>
                <img src={iconFlip} alt="Flip" />
              </button> */}
              <button className="icon-button" onClick={takePhoto}>
                <img src={iconCapture} alt="Capture" />
              </button>
            </div>

            {showGreatShot && (
              <div className="camera-ui__overlay-message">GREAT SHOT!</div>
            )}

            <div className="camera__loading--wrapper">
              <div className="camera__loading--list">
                <p className="camera__loading--para">
                  TO GET BETTER RESULTS, BE SURE TO HAVE:
                </p>
                <ul className="loading__list">
                  <li className="loading__list--item">&#9671; NEUTRAL EXPRESSION</li>
                  <li className="loading__list--item">&#9671; FRONTAL POSE</li>
                  <li className="loading__list--item">&#9671; ADEQUATE LIGHTING</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LoadingCamera;
