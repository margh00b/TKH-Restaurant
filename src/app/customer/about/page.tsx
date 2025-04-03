"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto mt-20 p-10 text-center"
    >
      <h1 className="text-4xl font-bold text-orange-600 mb-5">
        About Tandoori Kabab Hut
      </h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        At{" "}
        <span className="font-semibold text-orange-500">
          Tandoori Kabab Hut
        </span>
        , we specialize in delicious kababs, curries, roti, and much more. Using
        authentic flavors and traditional recipes, we bring the rich culinary
        heritage of South Asia to your plate. Every bite is packed with bold
        spices, fresh ingredients, and mouth-watering taste.
      </p>

      <div className="flex justify-center my-8 gap-5">
        <Image
          src="/HeroFood3.jpg"
          alt="Authentic Indian Cuisine"
          width={1000}
          height={1}
          className="rounded-lg shadow-lg"
        />
      </div>

      <p className="text-lg text-gray-700 leading-relaxed">
        If you&apos;re in the Calgary area and craving a delicious meal, we invite
        you to try our specialties like{" "}
        <span className="font-semibold text-orange-500">Chicken Biryani</span>,
        <span className="font-semibold text-orange-500">
          {" "}
          Tandoori Beef Kabab
        </span>
        , and our fresh{" "}
        <span className="font-semibold text-orange-500">Whole Wheat Roti</span>.
        Experience the warmth of homemade flavors with every dish!
      </p>
    </motion.div>
  );
};

export default About;
