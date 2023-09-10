import React from "react";
import { Ratings } from "../Ratings/Ratings";

export const Review = ({ feedback, rating }) => {
  return (
    <div className="innerContanierrer d-flex flex-column align-items-start  fw-bold">
      <p className="fs-3 ">Review</p>

      <div className="w-100 rounded-1 ">
        <div className="rounded-1 p-3 mb-5 mt-3 bg-body-secondary">
          <p>
            Kaedyn Fraser
            <Ratings Rating={rating} />
            <p className="mt-2 fw-lighter">
              {feedback}
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};
