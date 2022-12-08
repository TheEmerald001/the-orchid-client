import React, { useContext } from "react";
import { FlowerContext } from "./FlowerContext";
import ReviewContainer from "./ReviewContainer";
import ReviewForm from "./ReviewForm";
import "./FlowerPage.css";

function FlowerPage() {

  const { flower, flowerError, trigger } =
  useContext(FlowerContext);
  return (
    <>
     {flowerError.length > 0
        ? flowerError.map((error, index) => (
            <span key={index} className="error">
              {error}
            </span>
          ))
        : null}
      <div className="flower-row">
        <div id="flower-image">
          <img src={flower.image_url} alt={flower.name} />
        </div>
        <div id="book-body">
          <h2> {flower.name} </h2>
          <p> {flower.description} </p>
        </div>
      </div>
      <div className="review">
      <ReviewContainer />
        {trigger ? <ReviewForm /> : null}
      </div>
     
    </>
  );
}

export default FlowerPage;
