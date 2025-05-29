import React from "react";
import HomeButton from "../components/HomeButton";
import BackButton from "../components/BackButton";
import GetSummaryButton from "../components/GetSummaryButton";

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
              <div class="diamond-grid">
                <div class="diamond-box top"><span>DEMOGRAPHICS</span></div>
                <div class="diamond-box right"><span>COSMETIC<br />CONCERNS</span></div>
                <div class="diamond-box left"><span>SKIN TYPE<br />DETAILS</span></div>
                <div class="diamond-box bottom"><span>WEATHER</span></div>
            </div>


              </div>
            </div>

          </div>
        </main>
        <div className="back__button--wrapper">
          <BackButton />
        </div>
        <div className="getSummary__button--wrapper">
          <GetSummaryButton />
        </div>
      </div>
    </>
  );
};

export default Results;
