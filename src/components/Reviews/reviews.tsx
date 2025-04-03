import ReviewItem from "@/components/Reviews/subcomponents/ReviewItem/reviewItem";
import { reviewData } from "@/app/dummy/reviews.dummy";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <div className="flex flex-col items-center my-10 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="min-w-[250px] text-center w-full"
      >
        <h1 className="text-3xl font-semibold mb-6">Our Happy Customers</h1>
        <div className="flex flex-row items-start w-full gap-4">
          <div className="w-[40%] flex justify-center md:justify-start">
            <div className="bg-orange-500 text-white p-5 rounded-lg shadow-lg w-48 text-center md:text-left">
              <h2 className="text-4xl font-bold">4.8 ★</h2>
              <p className="text-lg">Based on 500+ reviews</p>
            </div>
          </div>
          <div className="w-[60%] overflow-x-auto flex gap-4 py-4 scrollbar-hide">
            {reviewData.map((reviewItem) => (
              <ReviewItem key={reviewItem.id} reviewItem={reviewItem} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default Reviews;
