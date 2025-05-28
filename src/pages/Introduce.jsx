import React from "react";
import HomeButton from "../components/HomeButton";
import BackButton from "../components/BackButton";

const Introduce = () => {
  return (
    <>
      <div className="home__button--wrapper">
        <HomeButton />
      </div>
      <div className="introduce__page">
        <div className="introduce__header">TO START ANALYSIS</div>
        <main className="introduce__main">
          <div className="introduce__input--center">
            

            {/* ROTATING DIVS */}

            <div className="rotating__wrapper">
              <div className="rotating__box rotating__box--3"></div>
              <div className="rotating__box rotating__box--2"></div>
              <div className="rotating__box rotating__box--1"></div>
              <div className="input__overlay">
                <div className="introduce__input--header">CLICK TO TYPE</div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Introduce Yourself"
                  className="rotating__input"
                />
              </div>
            </div>

            {/* END ROTATING DIVS */}
          
          </div>
        </main>
        <BackButton />
      </div>
    </>
  );
};

export default Introduce;
