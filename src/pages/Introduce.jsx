import { Link, useNavigate } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import BackButton from "../components/BackButton";
import ProceedButton from "../components/ProceedButton";
import { useUser } from "../context/UserData";
import { useState } from "react";

const Introduce = () => {
  const isValidInput = (value) => /^[A-Za-z\s]+$/.test(value.trim());

  const { name, setName } = useUser();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (isValidInput(name)) {
        setError("");
        navigate("/location");
      } else {
        setError("Please enter a valid name");
      }
    }
  };

  const handleChange = (e) => setName(e.target.value);

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
                  value={name}
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
        {name.trim() && isValidInput(name) && (
          <Link to="/location">
            <div className="proceed__button--wrapper">
              <ProceedButton />
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default Introduce;
