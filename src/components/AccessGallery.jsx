import React from "react";
import gallery from "../assets/gallery.png";

const AccessGallery = () => {
  return (
    <div className="rotating__wrapper">
      <div className="rotating__box rotating__box--6"></div>
      <div className="rotating__box rotating__box--5"></div>
      <div className="rotating__box rotating__box--4"></div>

      <div className="input__overlay--camera">
        <div className="icon__centered">
          <img src={gallery} className="icon" alt="" />

          <div className="icon__label--group icon__label--group--left">
            <div className="icon__line" />
            <div className="icon__label">
              <span>ACCESS</span>
              <span>GALLERY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessGallery;
