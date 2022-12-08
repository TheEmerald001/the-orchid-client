import React, { useContext } from "react";
import { FlowerContext } from "./FlowerContext";
import FlowerCard from "./FlowerCard";
import "./FlowerContainer.css";


function FlowerContainer() {
  const {flowers, flowersError, loading} =
    useContext(FlowerContext);

  const flowerList = flowers.map ((flower) => (
    <FlowerCard
      key={flower.id}
      flowerName={flower.name}
      flowerImage={flower.image_url}
      flowerDescription={flower.description}
      flower={flower}
    />
  ));
  return (
    <div className="flower-container">
      {flowersError.length > 0
        ? flowersError.map((error) => (
            <span className="error-message" key={error}>
              {error}
            </span>
          ))
        : null}
      {loading ? <h2>Loading...</h2> : flowerList}
    </div>
  );
}

export default FlowerContainer;