import React from "react";
import HomeButton from "../components/HomeButton";
import BackButton from "../components/BackButton";
import GetSummaryButton from "../components/GetSummaryButton";
import { Link } from "react-router-dom";

const Results = () => {
  return (
    <>
      <div className="home__button--wrapper">
        <HomeButton label="ANALYSIS" />
      </div>
      <div className="results__page">
        <div className="results__header">
          <b>A.I. ANALYSIS</b>
          <br />
          <br />
          A.I. HAS ESTIMATED THE FOLLOWING.
          <br />
          FIX ESTIMATED INFORMATION IF NEEDED.
        </div>
        <main className="results__main">
          <div className="results__input--center">
            <div className="no-rotating__wrapper">
              <div className="no-rotating__box no-rotating__box--3"></div>
              <div className="no-rotating__box no-rotating__box--2"></div>
              <div className="no-rotating__box no-rotating__box--1"></div>

              <div className="diamond__wrapper">
                <div className="diamond-grid">
                  <Link to="/demographics" className="diamond-link top">
                    <div className="diamond-box">
                      <span>DEMOGRAPHICS</span>
                    </div>
                  </Link>
                  <Link to="" className="diamond-link right">
                    <div className="diamond-box not-functional">
                      <span>
                        COSMETIC
                        <br />
                        CONCERNS
                      </span>
                    </div>
                  </Link>
                  <Link to="" className="diamond-link left">
                    <div className="diamond-box not-functional">
                      <span>
                        SKIN TYPE
                        <br />
                        DETAILS
                      </span>
                    </div>
                  </Link>
                  <Link to="" className="diamond-link bottom">
                    <div className="diamond-box not-functional">
                      <span>WEATHER</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="back__button--wrapper">
          <BackButton to="/" />
        </div>
        <div className="getSummary__button--wrapper">
          <GetSummaryButton />
        </div>
      </div>
    </>
  );
};

export default Results;
