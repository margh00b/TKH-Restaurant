import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="p-4 border-t-2">
      <div className="flex flex-col">
        <div className="flex justify-evenly ">
          <div className="max-w-[33%]">
            <h1 className="text-xl">Tandoori Kabab Hut</h1>
            <p className="text-gray-500 text-justify">
              At Tandoori Kabab Hut, we specialize in delicious kababs, curries,
              roti, and much more. Using authentic flavours and traditional
              recipes, Tandoori Kabab Hut packs the flavour in every bite
            </p>
          </div>
          <div>
            <h1 className="text-xl">Address</h1>
            <p className="flex items-center text-gray-500 max-w-[70%]">
              <FaLocationDot className="text-orange-500 mr-2" />
              4805 A 17 Avenue Southeast, Calgary, AB T2A 0V3, Canada
            </p>
          </div>
          <div>
            <h1 className="text-xl">Contact Us</h1>
            <p className="flex items-center text-gray-500">
              <MdEmail className="text-orange-500 mr-2" />
              info@tandoorikababhut.ca
            </p>
            <p className="flex items-center text-gray-500">
              <FaPhone className="text-orange-500 mr-2" />
              +1 (403) 460-9757
            </p>
            <p className="flex items-center text-gray-500">
              <AiFillInstagram className="text-orange-500 mr-2" />
              @tandoorikababhut
            </p>
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-200 mt-10 mb-5"></div>
        <p className="self-center">&copy; 2024 Tandoori Kabab Hut</p>
      </div>
    </footer>
  );
};
export default Footer;
