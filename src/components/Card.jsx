import React from "react";

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
      {/* Background Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-56 object-cover"
      />

      {/* Text Content with Blur Background */}
      <div className="absolute bottom-0 left-0 w-full bg-white/30 backdrop-blur-md p-4 text-white">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm mt-1">{description}</p>
      </div>
    </div>
  );
};

export default Card;
