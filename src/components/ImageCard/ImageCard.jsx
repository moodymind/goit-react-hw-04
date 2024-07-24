import React from "react";
import "./ImageCard.modules.css";

const ImageCard = ({ image, onClick }) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;
