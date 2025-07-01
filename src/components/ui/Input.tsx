import { IInput } from "@/interfaces/input.interface";
import * as React from "react";

export const Input = ({
  type,
  placeholder,
  onChange,
  value,
  className,
  disabled,
  required,
  name,
  id,
  defaultValue,
  readOnly = false,
  icon,
  ref,
  iconPosition,
}: IInput) => {
  return (
    <input
      defaultValue={value}
      type={type}
      name={name}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      value={value}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
      className={className}
      ref={ref}
    />
  );
};
export default Input;
