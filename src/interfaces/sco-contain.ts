import React, { ReactNode } from "react";
import { IconType } from "react-icons";

export interface ISCOContainType {
  title: string;
  text: string;
  icon: HTMLHRElement | ReactNode | IconType | React.ComponentType;
}
