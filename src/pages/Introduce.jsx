import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import BackButton from "../components/BackButton";
import ProceedButton from "../components/ProceedButton";

const Introduce = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      navigate("/location");
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="home__button--wrapper">
        <HomeButton label="INTRO" />
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
                  value={inputValue}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>

            {/* END ROTATING DIVS */}
          </div>
        </main>
        <div className="back__button--wrapper">
          <BackButton />
        </div>
        {inputValue.trim() && (
          <Link to="/location">
            <div className="proceed__button--wrapper">
              <ProceedButton />
            </div>
          </Link>
        )}
        ;
      </div>
    </>
  );
};

export default Introduce;
