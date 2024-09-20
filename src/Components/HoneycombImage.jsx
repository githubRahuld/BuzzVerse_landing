import React from "react";

const HoneycombImage = ({ src, alt, highlighted }) => {
  return (
    <div
      className={`relative w-24 h-24 overflow-hidden border border-black ${
        highlighted ? "opacity-100" : "opacity-100"
      }`}
      style={{
        clipPath:
          "polygon(0% 25%, 50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%)",
        backgroundColor: "white",
        transition: "opacity 0.3s ease-in-out", // Add transition for smooth hover effect
      }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default HoneycombImage;
