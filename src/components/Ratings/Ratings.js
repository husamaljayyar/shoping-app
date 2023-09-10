import "./Ratings.css";
import React from "react";
import { BsFillStarFill } from "react-icons/bs";

export const Ratings = ({ Rating, AverageRating }) => {

  return (
    <>
      <div className="letter font-monospace color d-flex flex-row ">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <div key={index} className={index <= (Rating | AverageRating) ? "on " : "off"}>
              <span className="star fs-5">
                <BsFillStarFill className="me-1 " />
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};