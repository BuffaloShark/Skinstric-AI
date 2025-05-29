import React from "react";

const DemoSidePanel = () => {
    return (
      <div className="demo__sidepanel">
        <div className="demo__sidepanel--item selected">
          <div className="label">EAST ASIAN</div>
          <div className="category">RACE</div>
        </div>
        <div className="demo__sidepanel--item">
          <div className="label">20–29</div>
          <div className="category">AGE</div>
        </div>
        <div className="demo__sidepanel--item">
          <div className="label">FEMALE</div>
          <div className="category">SEX</div>
        </div>
      </div>
    );
  };
  
  export default DemoSidePanel;