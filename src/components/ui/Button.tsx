"use client"
import { IButton } from "@/interfaces/button";
import { motion } from "framer-motion";
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
    <motion.button

      whileTap={{ scale: 0.95 }}

      onClick={onClick}
      className={`inline-flex items-center ${className}`} 
      disabled={disabled}
      type={type}
      style={style}
    >
      {iconPosition === "left" && icon && <span className="mr-2">{icon}</span>}
      <span>{label}</span>
      {iconPosition === "right" && icon && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};

export default Button;
