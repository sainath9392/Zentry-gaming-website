import React from "react";

const HiddenImage = ({ containerClass, src }) => {
  return (
    <div
      className={`h-[15px] w-[15px] md:h-[35px] md:w-[35px] rounded bg-black overflow-hidden transition-all duration-300 hover:h-[100px] hover:w-[150px] ${containerClass}`}
    >
      <img
        src={src}
        alt=""
        className="absolute inset-0 object-cover object-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"
      />
    </div>
  );
};

export default HiddenImage;
