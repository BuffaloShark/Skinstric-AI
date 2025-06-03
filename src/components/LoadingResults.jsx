import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserData";

const LoadingResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setPrediction } = useUser();
  const image = location.state?.image;

  useEffect(() => {
    const analyzeImage = async () => {
      try {
        const response = await fetch(
          "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ image }),
          }
        );
    
        const rawData = await response.json();
        const data = rawData.data;
        console.log("API Raw Response:", JSON.stringify(rawData, null, 2));

        // console.log("API Response:", data);
    
        if (!data || !data.race || !data.age || !data.gender) {
          throw new Error("Missing required prediction data from API.");
        }
    
        const getTopPrediction = (obj) => {
          if (!obj || typeof obj !== "object") return { label: "Unknown", confidence: 0 };
          const topEntry = Object.entries(obj).reduce((max, current) =>
            current[1] > max[1] ? current : max
          );
          return { label: topEntry[0], confidence: topEntry[1] };
        };
    
        const topRace = getTopPrediction(data.race);
        const topAge = getTopPrediction(data.age);
        const topGender = getTopPrediction(data.gender);
        const topPercent = data.percent ? getTopPrediction(data.percent) : { label: "N/A", confidence: 0 };
    
        const prediction = {
          ethnicity: topRace.label,
          ethnicityConfidence: Math.round(topRace.confidence * 100),
          age: topAge.label,
          ageConfidence: Math.round(topAge.confidence * 100),
          gender: topGender.label,
          genderConfidence: Math.round(topGender.confidence * 100),
          percent: topPercent.label,
          percentConfidence: Math.round(topPercent.confidence * 100),
          raw: data,
          fullData: data,
        };        
    
        setPrediction(prediction);
    
        setTimeout(() => {
          navigate("/results");
        }, 3000);
      } catch (error) {
        console.error("Error calling phase two API:", error);
      }
    };
    
    if (image) {
      analyzeImage();
    } else {
      console.warn("No image found. Redirecting to results...");
      navigate("/results");
    }
  }, [image, navigate, setPrediction]);

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
