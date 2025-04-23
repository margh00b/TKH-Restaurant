import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="p-4 border-t-2">
      <div className="flex flex-col md:p-10 md:flex-row justify-between">
        {/* Left Column: Tandoori Kabab Hut Description */}
        <div className="hidden md:flex md:flex-col max-w-full md:max-w-[33%] mb-6 md:mb-0">
          <h1 className="text-xl mb-2">Tandoori Kabab Hut</h1>
          <p className="text-gray-500 text-justify">
            At Tandoori Kabab Hut, we specialize in delicious kababs, curries,
            roti, and much more. Using authentic flavours and traditional
            recipes, Tandoori Kabab Hut packs the flavour in every bite.
          </p>
        </div>

        {/* Center Column: Address */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-xl mb-2">Address</h1>
          <p className="flex items-center text-gray-500 max-w-[70%]">
            <FaLocationDot className="text-orange-500 mr-2" />
            4805 A 17 Avenue Southeast, Calgary, AB T2A 0V3, Canada
          </p>
        </div>

        {/* Right Column: Contact Us */}
        <div className="">
          <h1 className="text-xl mb-2">Contact Us</h1>
          <p className="flex items-center text-gray-500 mb-2">
            <MdEmail className="text-orange-500 mr-2" />
            info@tandoorikababhut.ca
          </p>
          <p className="flex items-center text-gray-500 mb-2">
            <FaPhone className="text-orange-500 mr-2" />
            +1 (403) 460-9757
          </p>
          <p className="flex items-center text-gray-500">
            <AiFillInstagram className="text-orange-500 mr-2" />
            @tandoorikababhut
          </p>
        </div>
      </div>

      <div className="w-full h-[2px] bg-gray-200 mt-5 md:mt-10 mb-5"></div>
      <p className="text-center text-gray-500">
        &copy; 2025 Tandoori Kabab Hut Inc.
      </p>
    </footer>
  );
};

export default Footer;
