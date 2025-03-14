import Image from "next/image";
import menuItem from "./menuItems.interface";
import Button from "@/components/Button/button";
import { useAppDispatch } from "@/redux/store";
import { addItemToCart } from "@/redux/features/cartSlice";

const MenuItems = ({ menuItem }: { menuItem: menuItem }) => {
  const { title, description, price, image } = menuItem;
  const dispatch = useAppDispatch();

  return (
    <div className="flex max-w-[600px] min-w-[555px] p-5 text-white ">
      <Image
        src={image}
        alt={""}
        width={120}
        height={120}
        className="object-contain h-[100%]"
      />
      <div className="flex flex-col max-w-[300px] min-w-[300px] mx-5">
        <h1 className="text-xl">{title}</h1>
        <p className="text-[#adadad] hidden md:block">{description}</p>
      </div>
      <div className="text-xl">
        <h1 className="">${price}</h1>
          <Button btnText={`Add`} onClick={()=> dispatch(addItemToCart(menuItem))}/>
      </div>
    </div>
  );
};
export default MenuItems;
