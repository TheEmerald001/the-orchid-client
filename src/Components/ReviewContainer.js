import React, { useContext } from "react";
import { FlowerContext } from "./FlowerContext";
import ReviewCard from "./ReviewCard";
import "./Review.css";
function ReviewContainer() {
  const { reviews, handleAddReview } = useContext(FlowerContext);

  const reviewList = reviews.map((review) => (
    <ReviewCard
      key={review.id}
      reviewId={review.id}
      reviewName={review.name}
      reviewStar= { review.starRating}
      reviewComment={review.comment}
      reviewUser={review.user}
    />
  ));
  return (
    <div className="review-container">
      <h3>Reviews</h3>
      <button className="review-btn" onClick={handleAddReview}>
        Add Review
      </button>
      {reviewList}
    </div>
  );
}

export default ReviewContainer;