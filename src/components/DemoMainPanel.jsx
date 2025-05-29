import React from "react";

const DemoMainPanel = () => {
    return (
      <div className="demo__mainpanel">
        <h2 className="demo__main--label">East asian</h2>
        <div className="circle-wrapper">
          <div className="confidence-circle">
            <span className="confidence-value">96</span><span className="percent">%</span>
          </div>
        </div>
      </div>
    );
  };

  export default DemoMainPanel;
  