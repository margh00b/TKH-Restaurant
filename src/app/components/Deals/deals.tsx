"use client";
import DealItems from "@/app/components/Deals/subcomponents/dealItems/dealItems";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./deals.css";
import { useAppSelector } from "@/redux/store";

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
        },
      },
    ],
  };
  return (
    <div className="flex justify-center my-5">
      <div className="w-[80%]">
        <h1 className="text-3xl  text-center my-10">Today&aposs Deals</h1>
        <Slider {...settings}>
          {menuData
            .filter((menuItem) => menuItem.category === "MAIN_COURSE")
            .map((menuItem) => (
              <DealItems key={menuItem.id} menuItem={menuItem} />
            ))}
        </Slider>
      </div>
    </div>
  );
};
export default Deals;
