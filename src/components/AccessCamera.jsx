import React from "react";
import camera from "../assets/camera.png";

const AccessCamera = () => {
  return (
    <div className="rotating__wrapper">
      <div className="rotating__box rotating__box--6"></div>
      <div className="rotating__box rotating__box--5"></div>
      <div className="rotating__box rotating__box--4"></div>

      <div className="input__overlay--camera">
        <div className="icon__centered">
          <img src={camera} className="icon" alt="" />

          <div className="icon__label--group">
            <div className="icon__line" />
            <div className="icon__label">
              <span>ACCESS</span>
              <span>CAMERA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessCamera;
