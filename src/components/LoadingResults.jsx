import React from "react";

const LoadingResults = () => {
  return (
    
    <div className="location__page">
        <main className="location__main">
            <div className="rotating__wrapper">
              <div className="rotating__box rotating__box--9"></div>
              <div className="rotating__box rotating__box--8"></div>
              <div className="rotating__box rotating__box--7"></div>
              <div className="input__overlay">
                <div className="loading__input--header">PREPARING YOUR ANALYSIS...</div>
              </div>
            </div>
        </main>
        </div>
  );
};

export default LoadingResults;
