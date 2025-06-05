import React, { useState, useEffect } from "react";
import HomeButton from "../components/HomeButton";
import BackButton from "../components/BackButton";
import ResetButton from "../components/ResetButton";
import DemoSidePanel from "../components/DemoSidePanel";
import DemoMainPanel from "../components/DemoMainPanel";
import DemoConfidenceTable from "../components/DemoConfidenceTable";
import ConfirmButton from "../components/ConfirmButton";
import { useUser } from "../context/UserData";

const Demographics = () => {
  const { prediction } = useUser();

  const [selectedCategory, setSelectedCategory] = useState("race");
  const [confirmedValues, setConfirmedValues] = useState({});
  const [pendingValue, setPendingValue] = useState("");

  useEffect(() => {
    if (prediction) {
      const initial = {
        race: prediction.ethnicity.toLowerCase(),
        age: prediction.age,
        gender: prediction.gender.toLowerCase(),
      };
  
      setConfirmedValues(initial);
      setPendingValue(initial[selectedCategory]);
    }
  }, [prediction]);
  

  if (!prediction) {
    return <div>Please try again...</div>;
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // setPendingValue(confirmedValues[category] || "");

    const confirmed = confirmedValues[category]; // NEW LINE 6.5

    const newValue =
      confirmed !== undefined && confirmed !== "" // NEW LINE 6.5
      // category === "race"
        ? confirmed // NEW
        : category === "race" // NEW
        ? prediction.ethnicity.toLowerCase()
        : category === "age"
        ? prediction.age
        : prediction.gender.toLowerCase();

    setPendingValue(newValue); 
  };

  const handleConfirm = () => {
    console.log("Confirming", selectedCategory, "as", pendingValue);
    setConfirmedValues((prev) => ({
      ...prev,
      [selectedCategory]: pendingValue,
    })); 
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
              selectedValue={pendingValue} 
              currentDisplayValue={pendingValue}
              confirmedValues={confirmedValues}
              onSelect={handleCategoryChange}
            />
            <DemoMainPanel
              prediction={prediction}
              selectedCategory={selectedCategory}
              selectedValue={pendingValue} 
            />
            <DemoConfidenceTable
              prediction={prediction}
              selectedCategory={selectedCategory}
              selectedValue={pendingValue} 
              onSelect={setPendingValue}
            />
          </div>
        </main>
        <div className="demographics__para--footer">
          If A.I. estimate is wrong, select the correct one.
        </div>
        <footer className="results__footer">
  <div className="results__footer--buttons">
    <div className="back__button--wrapper">
    <BackButton />
    </div>
    <div className="responsive__button--wrapper">
    <ResetButton label="RESET" />
    <ConfirmButton label="CONFIRM" onClick={handleConfirm} />  
    </div>
  </div>
</footer>

      </div>
    </>
  );
};

export default Demographics;
