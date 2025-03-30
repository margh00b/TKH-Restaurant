import "./hero.css";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="hero mt-20 flex h-[70vh] py-20 overflow-hidden bg-[#fff] bg-[length:50px_50px]">
      <div className="flex flex-col w-1/2 py-5 px-20 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h1 className="text-5xl">
            Discover The Taste Of{" "}
            <span className="underline decoration-orange-500 decoration-1 underline-offset-8">
              Tradition
            </span>{" "}
            At <span className="text-orange-500">Tandoori Kabab Hut</span>
          </h1>

          <p className="text-lg mt-10">
            At Tandoori Kabab Hut, we specialize in delicious kababs, curries,
            roti, and much more. Using authentic flavours and traditional
            recipes, Tandoori Kabab Hut packs the flavour in every bite. If
            you&apos;re in the Calgary area and are craving a new bite to eat,
            try ordering today!
          </p>
        </motion.div>
      </div>

      <div className="flex justify-center w-1/2">
        <img
          src="/HeroFood2.jpg"
          alt="Tandoori Kabab Hut"
          className="shadow-2xl rounded-tl-[50px] rounded-br-[50px] rounded-tr-[20px] rounded-bl-[20px] h-1/2 self-end mr-[-25px] z-0"
        />
        <img
          src="/HeroFood.jpg"
          alt="Tandoori Kabab Hut"
          className="shadow-2xl rounded-tl-[100px] rounded-br-[100px] rounded-tr-[20px] rounded-bl-[20px]"
        />
      </div>
    </div>
  );
};
export default Hero;
