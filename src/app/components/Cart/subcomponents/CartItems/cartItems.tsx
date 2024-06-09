import Image from "next/image";
import Button from "@/app/components/Button/button";

const CartItems = () => {
  return (
    <div className="flex justify-between py-5 px-2 border-b-2 border-t-2 border-gray-200">
      <div className={`flex `}>
        <Image
          src={"/ChickenKorma.png"}
          alt={""}
          width={75}
          height={75}
          className="object-contain h-[100%]"
        />
        <div className="flex flex-col max-w-[300px] mx-2">
          <h1 className="text-lg">Chicken Biryani</h1>
          <h1 className="">$19.99</h1>
        </div>
      </div>
      <div className={`flex items-center`}>
        <div className={`flex bg-gray-50 shadow-lg rounded-2xl`}>
          <button className="h-7 w-7 place-self-center bg-white shadow-lg text-sm  rounded-2xl">
            -
          </button>
          <h1 className={`mx-2`}>1</h1>
          <button className="h-7 w-7 place-self-center bg-white shadow-lg text-sm  rounded-2xl">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
