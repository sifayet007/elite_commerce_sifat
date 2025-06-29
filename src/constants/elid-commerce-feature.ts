import { assets } from "@/assets";
import { BsEye } from "react-icons/bs";
import { FaEarDeaf, FaRegStar } from "react-icons/fa6";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { FaBoltLightning } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { RiCaravanLine } from "react-icons/ri";
import { LuMessageCircle } from "react-icons/lu";

const customerFeatures = [
  {
    id: 1,
    title: "Mega Menu",
    heading1: "Minimal Design Content For Mega Menu",
    description1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    highlight: "Mega Menu",
    image1: assets.customerPanelImg1,
    heading2: "Dead Simple Navigation For Mega Menu",
    description2:
      "Everything is visible at once. No more tiring scrolling or tapping. Simply hover, click, or tap, & customers understand your store in a second.",
    image2: assets.customerPanelImg5,
    icon: HiAdjustmentsHorizontal,
  },
  {
    id: 2,
    title: "Search",
    heading1: "Minimal Design Content For",
    description1:
      "Quickly find products by typing keywords. Enjoy instant results and easy navigation to your",
    highlight: "Search",
    image1: assets.customerPanelImg3,
    heading2: "Dead Simple",
    description2:
      "View a curated list of products matching your query. Filter, sort, and explore options to find",
    image2: assets.customerPanelImg4,
    icon: IoIosSearch,
  },
  {
    id: 3,
    title: "Quick View",
    heading1: "Minimal Design Content Forr",
    description1:
      "Instantly preview product details without leaving the page. Get a snapshot of features,",
    highlight: "Quick View",
    image1: assets.customerPanelImg5,
    heading2: "Dead Simple",
    description2:
      "instantly preview product details, images, and prices without leaving the page. Shop faster",
    image2: assets.customerPanelImg6,
    icon: BsEye,
  },
  {
    id: 4,
    title: "Quick Order",
    heading1: "Customer Feedback",
    description1:
      "Collect and display customer reviews to build trust in your store.",
    highlight: "Quick Order",
    image1: assets.customerPanelImg7,
    heading2: "Multiple Color Options",
    description2:
      "Offer different colors so customers can choose what they love.",
    image2: assets.customerPanelImg8,
    icon: FaBoltLightning,
  },
  {
    id: 5,
    title: "Wishlist",
    heading1: "Minimal Design Content For Mega Menu",
    description1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    highlight: "Wishlist",
    image1: assets.customerPanelImg9,
    heading2: "Dead Simple Navigation For Mega Menu",
    description2:
      "Everything is visible at once. No more tiring scrolling or tapping. Simply hover, click, or tap, & customers understand your store in a second.",
    image2: assets.customerPanelImg10,
    icon: GiSelfLove,
  },
  {
    id: 6,
    title: "Order Tracking",
    heading1: "Instant Product Preview",
    description1:
      "Preview product details instantly without loading a new page.",
    highlight: "Order Tracking",
    image1: assets.customerPanelImg11,
    heading2: "Fast Purchase",
    description2:
      "Order products quickly without multiple steps and improve sales.",
    image2: assets.customerPanelImg12,
    icon: RiCaravanLine,
  },
  {
    id: 7,
    title: "Product Review",
    heading1: "Save for Later",
    description1:
      "Users can save their favorite products to wishlist for future purchases.",
    highlight: "Product Review",
    image1: assets.customerPanelImg1,
    heading2: "Track Orders in Real Time",
    description2:
      "Let customers track their orders with live status and delivery info.",
    image2: assets.customerPanelImg12,
    icon: FaRegStar,
  },
  {
    id: 8,
    title: " Live Message",
    heading1: "Customer Feedback",
    description1:
      "Collect and display customer reviews to build trust in your store.",
    highlight: " Live Message",
    image1: assets.customerPanelImg1,
    heading2: "Multiple Color Options",
    description2:
      "Offer different colors so customers can choose what they love.",
    image2: assets.customerPanelImg6,
    icon: LuMessageCircle,
  },
];

export default customerFeatures;
