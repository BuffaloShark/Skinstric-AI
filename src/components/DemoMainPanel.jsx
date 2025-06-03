import React from "react";

const DemoMainPanel = ({ prediction, selectedCategory }) => {
  let label = "";
  let confidence = 0;

  if (selectedCategory === "race") {
    label = prediction.ethnicity;
    confidence = prediction.raw?.race?.[label.toLowerCase()] || 0;
  } else if (selectedCategory === "age") {
    label = prediction.age;
    confidence = prediction.raw?.age?.[label] || 0;
  } else if (selectedCategory === "gender") {
    label = prediction.gender;
    confidence = prediction.raw?.gender?.[label.toLowerCase()] || 0;
  }

  const confidencePercent = Math.round(confidence * 100);

  return (
    <div className="demo__mainpanel">
      <h2 className="demo__main--label">{label}</h2>
      <div className="circle-wrapper">
        <div className="confidence-circle">
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
    </div>
  );
};

export default DemoMainPanel;
