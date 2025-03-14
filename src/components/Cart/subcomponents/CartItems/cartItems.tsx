import Image from "next/image";
import menuItem from "@/components/Menu/subcomponents/MenuItems/menuItems.interface";
import { useAppDispatch } from "@/redux/store";
import { addItemToCart, removeItemFromCart } from "@/redux/features/cartSlice";

interface ICartItemProps {
  item: menuItem
}
const CartItems = ({item}: ICartItemProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between py-5 px-2 border-b-2 border-t-2 border-gray-200">
      <div className={`flex `}>
        <Image
          src={item.image}
          alt={""}
          width={75}
          height={75}
          className="object-contain h-[100%]"
        />
        <div className="flex flex-col max-w-[300px] mx-2">
          <h1 className="text-lg">{item.title}</h1>
          <h1 className="">${item.price}</h1>
        </div>
      </div>
      <div className={`flex items-center`}>
        <div className={`flex bg-gray-50 shadow-lg rounded-2xl`}>
          <button onClick={()=>dispatch(removeItemFromCart(item))} className="h-7 w-7 place-self-center bg-white shadow-lg text-sm  rounded-2xl">
            -
          </button>
          <h1 className={`mx-2`}>{item.quantity}</h1>
          <button onClick={()=>dispatch(addItemToCart(item))} className="h-7 w-7 place-self-center bg-white shadow-lg text-sm  rounded-2xl">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
