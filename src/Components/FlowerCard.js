
import React, { useContext } from "react";
import { FlowerContext } from "./FlowerContext";
import "./FlowerContainer.css";


function FlowerCard({ flowerImage, flowerName,flowerDescription, flower }) {
  const { handleFlower } = useContext(FlowerContext);
    
  return (
    <div className="flower-card">
      <div className="flowers">
      <div className="flower-img" onClick={() => handleFlower(flower)}>
        <img src={flowerImage} alt={flowerName} 
        />
      </div>
      <div className="orchid-info">
        <h2 onClick={() => handleFlower(flower)}>{flowerName}</h2>
        <p>{flowerDescription}</p>
      </div>
      <div className="action-btn">
      </div>
      </div>
    </div>
  );
}

export default FlowerCard;