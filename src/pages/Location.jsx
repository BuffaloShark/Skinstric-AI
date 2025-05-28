import React from "react";
import HomeButton from "../components/HomeButton";
import BackButton from "../components/BackButton";
import ProceedButton from "../components/ProceedButton";

const Location = () => {
  return (
    <>
      <div className="home__button--wrapper">
        <HomeButton />
      </div>
      <div className="location__page">
        <div className="location__header">TO START ANALYSIS</div>
        <main className="location__main">
          <div className="location__input--center">

            {/* ROTATING DIVS */}

            <div className="rotating__wrapper">
              <div className="rotating__box rotating__box--3"></div>
              <div className="rotating__box rotating__box--2"></div>
              <div className="rotating__box rotating__box--1"></div>
              <div className="input__overlay">
                <div className="location__input--header">CLICK TO TYPE</div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Where are you from?"
                  className="rotating__input"
                />
              </div>
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

export default Location;
