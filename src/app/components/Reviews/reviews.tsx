import ReviewItem from "@/app/components/Reviews/subcomponents/ReviewItem/reviewItem";
import DealItems from "@/app/components/Deals/subcomponents/dealItems/dealItems";
import { reviewData } from "@/app/dummy/reviews.dummy";

const Reviews = () => {
  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="text-3xl">Our Happy Customers</h1>
      <div className="flex">
        {reviewData.map((reviewItem) => (
          <ReviewItem key={reviewItem.id} reviewItem={reviewItem} />
        ))}
      </div>
    </div>
  );
};
export default Reviews;
