import { IButton } from "@/interfaces/button";
import React from "react";

const Button = ({
  label,
  onClick,
  className,
  disabled,
  type = "button",
  icon,
  iconPosition = "left",
  style,
}: IButton) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center ${className}`} // 👈 flex for icon + text layout
      disabled={disabled}
      type={type}
      style={style}
    >
      {iconPosition === "left" && icon && <span className="mr-2">{icon}</span>}
      <span>{label}</span>
      {iconPosition === "right" && icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;
