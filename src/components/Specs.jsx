import React from "react";

const Specs = ({ title, no, context, containerClass }) => {
  return (
    <div className={`font-circular-web ${containerClass} `}>
      <div className="flex gap-4 font-general font-bold text-xs uppercase md:text-[10px] text-black">
        <p>{no}</p>
        <h6>{title}</h6>
      </div>
      <div className="flex gap-7 font-general text-[8px] uppercase md:text-[10px] mt-1 text-black">
        <div></div>
        <p>{context}</p>
      </div>
    </div>
  );
};

export default Specs;
