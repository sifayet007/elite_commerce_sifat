import { ITextarea } from "@/interfaces/textarea";
import React from "react";

const Textarea = ({
  placeholder,
  rows,
  cols,
  value,
  label,
  name,
  id,
}: ITextarea) => {
  return (
    <textarea
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      value={value}
      name={name}
      id={id}
    ></textarea>
  );
};

export default Textarea;
