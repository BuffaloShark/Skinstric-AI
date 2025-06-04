import React, { useEffect } from "react";

const DemoSidePanel = ({ prediction, selectedCategory, selectedValue, confirmedValues, onSelect }) => {
  useEffect(() => {
    console.log("DemoSidePanel Rendered - selectedValue:", selectedValue);
  }, [selectedValue]);

  const getLabel = (category) => {
    const confirmed = confirmedValues?.[category];
    
    if (confirmed !== undefined && confirmed !== "") {
      return confirmed;
    }
  
    if (category === "race") return prediction.ethnicity.toLowerCase();
    if (category === "age") return prediction.age;
    if (category === "gender") return prediction.gender.toLowerCase();
  
    return "";
  };
  

  const formatLabel = (label, category) => {
    if (!label) return "";
    if (category === "race" || category === "gender") {
      return label.charAt(0).toUpperCase() + label.slice(1).replace(/_/g, " ");
    }
    return label;
  };
  

  return (
    <div className="demo__sidepanel">
      <div
        className={`demo__sidepanel--item ${selectedCategory === "race" ? "selected" : ""}`}
        onClick={() => onSelect("race")}
      >
        <div className="label">{formatLabel(getLabel("race"), "race").toUpperCase()}</div>
        <div className="category">RACE</div>
      </div>
      <div
        className={`demo__sidepanel--item ${selectedCategory === "age" ? "selected" : ""}`}
        onClick={() => onSelect("age")}
      >
        <div className="label">{formatLabel(getLabel("age"), "age")}</div>
        <div className="category">AGE</div>
      </div>
      <div
        className={`demo__sidepanel--item ${selectedCategory === "gender" ? "selected" : ""}`}
        onClick={() => onSelect("gender")}
      >
        <div className="label">{formatLabel(getLabel("gender"), "gender").toUpperCase()}</div>
        <div className="category">SEX</div>
      </div>
    </div>
  );
};

export default DemoSidePanel;
