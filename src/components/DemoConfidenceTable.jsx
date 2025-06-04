import React from "react";

const DemoConfidenceTable = ({
  prediction,
  selectedCategory,
  selectedValue,
  onSelect,
}) => {
  const categoryData = prediction.raw?.[selectedCategory] || {};

  const formatLabel = (label) => {
    if (selectedCategory === "gender" || selectedCategory === "race") {
      return label.charAt(0).toUpperCase() + label.slice(1).replace(/_/g, " ");
    }
    return label;
  };

  return (
    <div className="demo__confidence-table">
      <div className="table-header">
        <span>{selectedCategory.toUpperCase()}</span>
        <span>A.I. CONFIDENCE</span>
      </div>
      {Object.entries(categoryData)
        .sort((a, b) => b[1] - a[1])
        .map(([label, value]) => {
          const isSelected = label === selectedValue;
          return (
            <div
              key={label}
              className={`table-row ${isSelected ? "selected" : ""}`}
              onClick={() => onSelect(label)}
            >
              <span>{isSelected ? "◆" : "◇"} {formatLabel(label.toUpperCase())}</span>
              <span>{Math.round(value * 100)}%</span>
            </div>
          );
        })}
    </div>
  );
  
};

export default DemoConfidenceTable;
