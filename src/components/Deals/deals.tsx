"use client";
import DealItems from "@/components/Deals/subcomponents/dealItems/dealItems";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./deals.css";
import { useAppSelector } from "@/redux/store";
import { motion } from "framer-motion";

const Deals = () => {
  const menuData = useAppSelector((state) => state.menuItems.items);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <div className="flex justify-center my-5">
      <div className="w-[80%]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="my-5 px-5"
        >
          <h1 className="text-3xl  text-center my-10">Today&apos;s Deals</h1>
          <Slider {...settings}>
            {menuData
              .filter((menuItem) => menuItem.category === "MAIN_COURSE")
              .map((menuItem) => (
                <motion.div
                  key={menuItem.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <DealItems key={menuItem.id} menuItem={menuItem} />
                </motion.div>
              ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
};
export default Deals;
