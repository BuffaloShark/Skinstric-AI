import React from "react";
import HomeButton from "../components/HomeButton";
import BackButton from "../components/BackButton";
import CodeButton from "../components/CodeButton";
import DemoSidePanel from "../components/DemoSidePanel";
import DemoMainPanel from "../components/DemoMainPanel";
import DemoConfidenceTable from "../components/DemoConfidenceTable";
import ResetButton from "../components/ResetButton";

const Demographics = () => {
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
          <h1 className="demographics__header">DEMOGRAPHICS</h1>
          <br />
          PREDICTED RACE &amp; AGE
        </div>
        <main className="results__main">
          <div className="demo__analysis-dashboard">
            <DemoSidePanel />
            <DemoMainPanel />
            <DemoConfidenceTable />
          </div>
        </main>
        <div className="demographics__para--footer">
            If A.I. estimate is wrong, select the correct one.
          </div>
          <div className="back__button--wrapper">
            <BackButton />
          </div>
          
          <div className="getSummary__button--wrapper">
            <ResetButton label="RESET" />
            <CodeButton label="CONFIRM" />
          </div>
      </div>
    </>
  );
};

export default Demographics;
