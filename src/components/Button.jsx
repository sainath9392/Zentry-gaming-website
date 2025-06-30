import React from "react";

const Button = ({ title, id, leftIcon, containerClass ,style, rightIcon }) => {
  return <button style={style} className={`para2 group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full ${containerClass}`}>{leftIcon} <span className="para2 relative incline-flex overflow-hidden font-general text-xs uppercase">
    <div >{title}</div>
    </span>
    {rightIcon}</button>;
};

export default Button;
