import React from "react";
import camera from "../assets/camera.png";

const LoadingCamera = () => {
  return (
    <div className="loading-camera__page">
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
      </main>
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
  );
};

export default LoadingCamera;
