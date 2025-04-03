import Image from "next/image";
import menuItem from "./menuItems.interface";
import { useAppDispatch } from "@/redux/store";
import { addItemToCart } from "@/redux/features/cartSlice";

const MenuItems = ({ menuItem }: { menuItem: menuItem }) => {
  const { title, description, price, image } = menuItem;
  const dispatch = useAppDispatch();

  return (
    <div className="flex w-full max-w-[600px] md:min-w-[555px] p-5 text-white ">
      <Image
        src={image}
        alt={""}
        width={120}
        height={120}
        className="object-contain h-[100%]"
      />
      <div className="flex-col self-center justify-around w-full ml-12 md:ml-0 md:flex md:flex-row">
        <div className="flex  flex-col max-w-[300px] md:w-[298px] md:mx-5">
          <h1 className="text-xl">{title}</h1>
          <p className="text-[#adadad] hidden md:block">{description}</p>
        </div>
        <div className="text-xl">
          <h1 className="">${price}</h1>
          <button
            onClick={() => dispatch(addItemToCart(menuItem))}
            className="place-self-center bg-orange-500 text-white text-sm py-1 px-4 mt-2 md:mt-0 rounded hover:bg-orange-600"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default MenuItems;
