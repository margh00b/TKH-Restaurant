import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="p-4">
      <div className="flex flex-col">
        <div className="flex justify-evenly ">
          <div className="max-w-[33%]">
            <h1 className="text-xl">Tandoori Kabab Hut</h1>
            <p className="text-gray-500">
              We are a family owned and operated restaurant serving authentic
              Indian cuisine. Our menu features a variety of dishes from
              different regions of India.
            </p>
          </div>
          <div>
            <h1 className="text-xl">Address</h1>
            <p className="flex items-center text-gray-500">
              <FaLocationDot className="text-orange-500 mr-2" />
              1234 Main Street
            </p>
          </div>
          <div>
            <h1 className="text-xl">Contact Us</h1>
            <p className="flex items-center text-gray-500">
              <MdEmail className="text-orange-500 mr-2" />
              someone@example.com
            </p>
            <p className="flex items-center text-gray-500">
              <FaPhone className="text-orange-500 mr-2" />
              123-456-7890
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
