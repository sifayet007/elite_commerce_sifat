import { StaticImageData } from "next/image";

export interface ITestomialType {
  name: string;
  avatar: string | StaticImageData;
  comment: string;
  location: string;
  rating: number;
}
