import React from "react";

const predictions = [
    { label: "East Asian", confidence: 96, selected: true },
    { label: "White", confidence: 6 },
    { label: "Black", confidence: 3 },
    { label: "South Asian", confidence: 2 },
    { label: "Latino Hispanic", confidence: 0 },
    { label: "South East Asain", confidence: 0 },
    { label: "Middle Eastern", confidence: 0 },
  ];
  
  const DemoConfidenceTable = () => {
    return (
      <div className="demo__confidence-table">
        <div className="table-header">
          <span>RACE</span>
          <span>A. I. CONFIDENCE</span>
        </div>
        {predictions.map((item, idx) => (
          <div
            className={`table-row ${item.selected ? "selected" : ""}`}
            key={idx}
          >
            <span>{item.selected ? "" : "◇"} {item.label}</span>
            <span>{item.confidence} %</span>
          </div>
        ))}
      </div>
    );
  };

  export default DemoConfidenceTable;
  