import { FaStar, FaRegStar } from "react-icons/fa";
import reviewItem from "@/app/components/Reviews/subcomponents/ReviewItem/reviewItems.interface";
const ReviewItem = ({ reviewItem }: { reviewItem: reviewItem }) => {
  const { name, desc } = reviewItem;
  return (
    <div className="flex flex-col items-center max-w-60 shadow-lg border-gray-100 border-2 p-5 m-5 rounded-xl">
      <img src="/user.png" alt="user" className="w-20 h-20" />
      <h1 className="text-xl pt-5">{name}</h1>
      <div className="flex pb-5 pt-2">
        <FaStar className="text-orange-500" />
        <FaStar className="text-orange-500" />
        <FaStar className="text-orange-500" />
        <FaStar className="text-orange-500" />
        <FaRegStar />
      </div>
      <p className="text-center overflow-hidden">{desc}</p>
    </div>
  );
};
export default ReviewItem;
