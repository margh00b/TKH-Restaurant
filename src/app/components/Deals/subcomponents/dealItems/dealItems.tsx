import Image from "next/image";
import menuItem from "../../../Menu/subcomponents/MenuItems/menuItems.interface";

const DealItems = ({ menuItem }: { menuItem: menuItem }) => {
  const { title, description, price, image } = menuItem;
  return (
    <div className="flex flex-col text-xl rounded-lg shadow-md bg-white h-[400px] w-fit cursor-pointer hover:shadow-2xl border-2 border-gray-200   duration-500">
      <Image
        src={image}
        alt={""}
        width={120}
        height={120}
        className="object-contain self-center"
      />
      <div className="grid h-full mt-5 mx-5 w-[300px]">
        <h3 className="mb-2">{title}</h3>
        <p className="text-gray-500 text-base h-fit overflow-hidden">
          Refreshing yogurt-based drink.Refreshing yogurt-based drink.Refreshing
          yogurt-based drink.Refreshing yogurt-based drink.Refreshing
          yogurt-based drink.Refreshing yogurt-based drink.
        </p>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">{price}</span>
        </div>
      </div>
    </div>
  );
};
export default DealItems;
