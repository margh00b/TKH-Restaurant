"use client";

import { ChangeEvent, useEffect, useState } from "react";
import {
  addMenuItems,
  deleteMenuItems,
  getMenuItems,
  updateMenuItems,
} from "@/redux/features/menuSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { menuCategoryData } from "@/app/dummy/menuCategories.dummy";
import menuItem from "@/components/Menu/subcomponents/MenuItems/menuItems.interface";
import { ToastContainer, toast } from "react-toastify";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const menuItems = useAppSelector((state) => state.menuItems.items);
  const [editableItems, setEditableItems] = useState(menuItems);
  const [newItem, setnewItem] = useState({
    id: 0,
    title: "",
    description: "",
    category: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    dispatch(getMenuItems());
  }, [dispatch]);
  useEffect(() => {
    setEditableItems(Array.isArray(menuItems) ? menuItems : [menuItems]);
  }, [menuItems]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: number,
    field: any
  ) => {
    setEditableItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [field]: e.target.value } : item
      )
    );
  };

  const handleNewItemChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: any
  ) => {
    setnewItem({ ...newItem, [field]: e.target.value });
  };
  const handleAddMenuItem = async () => {
    if (
      !newItem.title ||
      !newItem.description ||
      !newItem.category ||
      !newItem.price ||
      !newItem.image
    ) {
      toast.error("Invalid Input! Please fill in all fields.");
      return;
    }
    await dispatch(addMenuItems(newItem));
    await dispatch(getMenuItems());
    setnewItem({
      id: 0,
      title: "",
      description: "",
      category: "",
      price: "",
      image: "",
    });
    toast.success("Menu item added successfully!");
  };
  const handleUpdateMenuItem = async ({
    id,
    title,
    description,
    category,
    price,
    image,
  }: menuItem) => {
    await dispatch(
      updateMenuItems({
        id: id,
        title: title,
        description: description,
        category: category,
        price: price,
        image: image,
      })
    );
    const updatedItems = editableItems.map((item) =>
      item.id === id
        ? { ...item, title, description, category, price, image }
        : item
    );
    await dispatch(getMenuItems());
    setEditableItems(updatedItems);
    toast.success("Menu item updated successfully!");
  };

  const handleDeleteMenuItems = async (itemId: number) => {
    await dispatch(deleteMenuItems(itemId));
    toast.success("Menu item Deleted successfully!");
    await dispatch(getMenuItems());
  };

  return (
    <>
      <ToastContainer position="bottom-right" />
      <div className="">
        <div className="overflow-x-auto rounded-lg shadow-lg bg-white mx-10">
          <h1 className="text-center text-2xl my-6">Menu Dashboard</h1>
          <table className="min-w-full table-auto text-sm text-gray-700">
            <thead className="bg-gray-100 text-xs text-gray-600 uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Description</th>
                <th className="px-4 py-3 text-left">Category</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left">Image</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-y-2 border-green-400 bg-green-50 hover:bg-green-100 transition-colors duration-200">
                <td className="px-4 py-3 text-center font-semibold text-green-700">
                  New
                </td>
                <td className="px-4 py-3">
                  <input
                    type="text"
                    value={newItem.title}
                    onChange={(e) => handleNewItemChange(e, "title")}
                    placeholder="Title"
                    className="px-4 py-2 w-full border border-green-300 rounded-md focus:ring-2 focus:ring-green-400"
                  />
                </td>
                <td className="px-4 py-3">
                  <input
                    type="text"
                    value={newItem.description}
                    onChange={(e) => handleNewItemChange(e, "description")}
                    placeholder="Description"
                    className="px-4 py-2 w-full border border-green-300 rounded-md focus:ring-2 focus:ring-green-400"
                  />
                </td>
                <td className="px-4 py-3">
                  <select
                    value={newItem.category}
                    onChange={(e) => handleNewItemChange(e, "category")}
                    className="px-4 py-2 w-full border border-green-300 rounded-md focus:ring-2 focus:ring-green-400"
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    {menuCategoryData.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-3">
                  <input
                    type="text"
                    value={newItem.price}
                    onChange={(e) => handleNewItemChange(e, "price")}
                    placeholder="Price"
                    className="px-4 py-2 w-full border border-green-300 rounded-md focus:ring-2 focus:ring-green-400"
                  />
                </td>
                <td className="px-4 py-3">
                  <input
                    type="text"
                    value={newItem.image}
                    onChange={(e) => handleNewItemChange(e, "image")}
                    placeholder="Image"
                    className="px-4 py-2 w-full border border-green-300 rounded-md focus:ring-2 focus:ring-green-400"
                  />
                </td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={handleAddMenuItem}
                    className="bg-green-600 text-white text-sm py-2 px-4 rounded hover:bg-green-700 transition"
                  >
                    Insert
                  </button>
                </td>
              </tr>
              {[...editableItems]
                .sort((a, b) => a.id - b.id)
                .map((item) => (
                  <tr key={item.id} className="border-b border-gray-200">
                    <td className="px-4 py-3">{item.id}</td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => handleChange(e, item.id, "title")}
                        className="px-4 py-2 w-full border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) =>
                          handleChange(e, item.id, "description")
                        }
                        className="px-4 py-2 w-full border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={item.category}
                        onChange={(e) => handleChange(e, item.id, "category")}
                        className="px-4 py-2 w-full border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={item.price}
                        onChange={(e) => handleChange(e, item.id, "price")}
                        className="px-4 py-2 w-full border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={item.image}
                        onChange={(e) => handleChange(e, item.id, "image")}
                        className="px-4 py-2 w-full border border-gray-300 rounded-md"
                      />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() =>
                          handleUpdateMenuItem({
                            id: item.id,
                            title: item.title,
                            description: item.description,
                            category: item.category,
                            price: item.price,
                            image: item.image,
                          })
                        }
                        className="bg-orange-500 hover:bg-orange-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-all duration-200 shadow-sm"
                      >
                        Submit
                      </button>

                      <button
                        onClick={() => handleDeleteMenuItems(item.id)}
                        className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 ml-4 rounded-md transition-colors duration-200 shadow-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
