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
        <div className="flex flex-row items-center h-full w-full gap-4 md:overflow-hidden md:px-64">
          <div className="flex flex-col items-center justify-center border-orange-500 border-2 p-5 rounded-full shadow-lg min-w-32 md:min-w-40 min-h-32 md:min-h-40 text-center">
            <h2 className="text-xl md:text-4xl font-bold text-orange-500">
              4.8 ★
            </h2>
            <p className="font-semibold text-sm md:text-lg ">
              Based on 500+ reviews
            </p>
          </div>

          <div className=" overflow-x-auto flex gap-4 scrollbar-hide p-4">
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
