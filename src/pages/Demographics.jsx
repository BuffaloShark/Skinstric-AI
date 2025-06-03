import React, { useState, useEffect } from "react";
import HomeButton from "../components/HomeButton";
import BackButton from "../components/BackButton";
import CodeButton from "../components/CodeButton";
import DemoSidePanel from "../components/DemoSidePanel";
import DemoMainPanel from "../components/DemoMainPanel";
import DemoConfidenceTable from "../components/DemoConfidenceTable";
import ResetButton from "../components/ResetButton";
import { useUser } from "../context/UserData";

const Demographics = () => {
  const { prediction } = useUser();

  const [selectedCategory, setSelectedCategory] = useState("race");
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    if (prediction) {
      setSelectedValue(
        selectedCategory === "race"
          ? prediction.ethnicity?.toLowerCase()
          : selectedCategory === "age"
          ? prediction.age
          : prediction.gender?.toLowerCase()
      );
    }
  }, [prediction, selectedCategory]);

  if (!prediction) {
    return <div>Loading prediction...</div>;
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  
    if (category === "race") {
      setSelectedValue(prediction.ethnicity.toLowerCase());
    } else if (category === "age") {
      setSelectedValue(prediction.age);
    } else if (category === "gender") {
      setSelectedValue(prediction.gender.toLowerCase());
    }
  };
  

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
          PREDICTED RACE & AGE
        </div>
        <main className="results__main">
          <div className="demo__analysis-dashboard">
            <DemoSidePanel
              prediction={prediction}
              selectedCategory={selectedCategory}
              onSelect={handleCategoryChange}
            />
            <DemoMainPanel
              prediction={prediction}
              selectedCategory={selectedCategory}
              selectedValue={selectedValue}
            />
            <DemoConfidenceTable
              prediction={prediction}
              selectedCategory={selectedCategory}
              selectedValue={selectedValue}
              onSelect={setSelectedValue}
            />
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
