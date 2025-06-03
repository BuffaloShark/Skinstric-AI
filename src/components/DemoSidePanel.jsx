import React from "react";

const DemoSidePanel = ({ prediction, selectedCategory, onSelect }) => {
  return (
    <div className="demo__sidepanel">
      <div
        className={`demo__sidepanel--item ${selectedCategory === "race" ? "selected" : ""}`}
        onClick={() => onSelect("race")}
      >
        <div className="label">{prediction.ethnicity}</div>
        <div className="category">RACE</div>
      </div>
      <div
        className={`demo__sidepanel--item ${selectedCategory === "age" ? "selected" : ""}`}
        onClick={() => onSelect("age")}
      >
        <div className="label">{prediction.age}</div>
        <div className="category">AGE</div>
      </div>
      <div
        className={`demo__sidepanel--item ${selectedCategory === "gender" ? "selected" : ""}`}
        onClick={() => onSelect("gender")}
      >
        <div className="label">{prediction.gender}</div>
        <div className="category">SEX</div>
      </div>
    </div>
  );
};

export default DemoSidePanel;
