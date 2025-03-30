import ReviewItem from "@/components/Reviews/subcomponents/ReviewItem/reviewItem";
import DealItems from "@/components/Deals/subcomponents/dealItems/dealItems";
import { reviewData } from "@/app/dummy/reviews.dummy";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <div className="flex flex-col items-center my-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="min-w-[250px] text-center"
      >
        <h1 className="text-3xl">Our Happy Customers</h1>
        <div className="flex">
          {reviewData.map((reviewItem) => (
            <ReviewItem key={reviewItem.id} reviewItem={reviewItem} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};
export default Reviews;
