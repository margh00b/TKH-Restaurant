import Image from "next/image";
import menuItem from "./menuItems.interface";

const MenuItems = ({ menuItem }: { menuItem: menuItem }) => {
  const { title, description, price, image } = menuItem;
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
        <h1 className="">{price}</h1>
      </div>
    </div>
  );
};
export default MenuItems;
