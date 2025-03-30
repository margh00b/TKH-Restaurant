import { motion } from "framer-motion";

const SkeletonLoader = () => {
  return (
    <motion.div
      className="skeleton-loader bg-gray-300 rounded-[30px]"
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      style={{ width: "250px", height: "350px", margin: "10px" }}
    />
  );
};

export default SkeletonLoader;
