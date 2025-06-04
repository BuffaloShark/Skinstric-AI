import React from "react";

const DemoMainPanel = ({ prediction, selectedCategory, selectedValue }) => {
    let confidence = 0;

if (selectedCategory === "race" && selectedValue) {
  confidence = prediction.raw?.race?.[selectedValue.toLowerCase()] || 0;
} else if (selectedCategory === "age" && selectedValue) {
  confidence = prediction.raw?.age?.[selectedValue] || 0;
} else if (selectedCategory === "gender" && selectedValue) {
  confidence = prediction.raw?.gender?.[selectedValue.toLowerCase()] || 0;
}
  
    const confidencePercent = Math.round(confidence * 100);
  
    return (
      <div className="demo__mainpanel">
        <h2 className="demo__main--label">{selectedValue}</h2>
        <div className="circle-wrapper">
          <div
            className="confidence-circle"
            style={{
              background: `conic-gradient(#111 ${confidencePercent}%, #eee ${confidencePercent}% 100%)`,
            }}
          >
            <div className="confidence-inner">
              <span className="confidence-value">{confidencePercent}%</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default DemoMainPanel;