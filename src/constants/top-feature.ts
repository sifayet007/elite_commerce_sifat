import { assets } from "@/assets";
import { title } from "process";
import { text } from "stream/consumers";

const topFeatureCards = [
  {
    title: "Premium Features",
    description: "Equipped with many advanced features for an online store!",
    icon: assets.topFeatureImg2,
    color: "bg-gradient-to-r from-[#01904D] to-[#0CE47F]",
    textColor: "text-white",
  },
  {
    title: "High-Performance",
    description:
      "Built-in with the latest standards plus optimized to run as fast as possible.",
    icon: assets.topFeatureImg1,
    color: "bg-[#E6FBEF]",
    outlineClor: "outline outline-[#00C354]",
  },
  {
    title: "Easy to Use",
    description: "Easily customize without touching a single line of code.",
    icon: assets.topFeatureImg4,
    color: "bg-[#EEEDFF]",
    outlineClor: "outline outline-[#7C71FF]",
  },
  {
    title: "Unique Design",
    description:
      "Make sure you adapt to any future WordPress release versions.",
    icon: assets.topFeatureImg6,
    color: "bg-[#E8F7FF]",
    outlineClor: "outline outline-[#00A6FF]",
  },
  {
    title: "Dedicated Support",
    description:
      "Provide support with out best and full of effort to help you have ease work!",
    icon: assets.topFeatureImg5,
    color: "bg-[#FFEAF4]",
    outlineClor: "outline outline-[#FF0079]",
  },
  {
    title: "Best of Price",
    description: "Bringing you professional website layouts at the best price.",
    icon: assets.topFeatureImg3,
    color: "bg-[#FFF7E0]",
    outlineClor: "outline outline-[#FFBD00]",
  },
];
export default topFeatureCards;
