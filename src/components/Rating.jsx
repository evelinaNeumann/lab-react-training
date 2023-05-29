import React from "react";

function Rating(props) {
  const { children } = props;
  const filledStars = Math.round(children);
  const emptyStars = 5 - filledStars;

  const starStyle = {
    color: "gold",
    marginRight: "2px",
  };

  const emptyStarStyle = {
    color: "lavender",
    marginRight: "2px",
  };

  return (
    <div>
      {Array(filledStars).fill(<span style={starStyle}>★</span>)}
      {Array(emptyStars).fill(<span style={emptyStarStyle}>☆</span>)}
    </div>
  );
}

export default Rating;
