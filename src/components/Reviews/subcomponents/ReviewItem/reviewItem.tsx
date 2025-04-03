import { FaStar, FaRegStar } from "react-icons/fa";
import reviewItem from "@/components/Reviews/subcomponents/ReviewItem/reviewItems.interface";
const ReviewItem = ({ reviewItem }: { reviewItem: reviewItem }) => {
  const { name, desc } = reviewItem;
  return (
    <div className="flex flex-row items-center min-w-96 shadow-lg p-5 rounded-xl">
      <div className="flex flex-col items-center">
        <img src="/user.png" alt="user" className="w-14 h-14" />
        <h1 className="font-semibold pt-3">{name}</h1>
        <div className="flex pb-5 pt-2">
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaRegStar />
        </div>
      </div>
      <div className="h-1/2 ml-5 w-1/2 text-sm md:w-full md:text-base">
        <p className="text-center">{desc}</p>
      </div>
    </div>
  );
};
export default ReviewItem;
