import React from "react";

const FaceCard = ({ imageUrl }) => {
  // console.log("FaceCard imageUrl:", imageUrl);
  return (
    <div>
      <img src={imageUrl} alt="Face" />
    </div>
  );
};

export default FaceCard;
