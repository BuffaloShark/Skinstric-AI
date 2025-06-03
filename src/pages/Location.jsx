import { Link, useNavigate } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import BackButton from "../components/BackButton";
import ProceedButton from "../components/ProceedButton";
import { useUser } from "../context/UserData";
import { useState } from "react";

const Location = () => {
  const isValidInput = (value) => /^[A-Za-z\s]+$/.test(value.trim());

  const { location, setLocation } = useUser();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (isValidInput(location)) {
        setError("");
        navigate("/startAnalysis");
      } else {
        setError("Please enter a valid location (letters only).");
      }
    }
  };

  const handleChange = (e) => setLocation(e.target.value);

  return (
    <>
      <div className="home__button--wrapper">
        <HomeButton label="INTRO" />
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
                  value={location}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                {error && <div className="error-message">{error}</div>}
              </div>
            </div>

            {/* END ROTATING DIVS */}
          </div>
        </main>
        <div className="back__button--wrapper">
          <BackButton />
        </div>
        {location.trim() && (
          <Link to="/startAnalysis">
            <div className="proceed__button--wrapper">
              <ProceedButton />
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default Location;
