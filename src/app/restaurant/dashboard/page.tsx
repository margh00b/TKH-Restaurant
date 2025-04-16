"use client";

import { ChangeEvent, useEffect, useState } from "react";
import {
  deleteMenuItems,
  getMenuItems,
  updateMenuItems,
} from "@/redux/features/menuSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Button from "@/components/Button/button";
import menuItem from "@/components/Menu/subcomponents/MenuItems/menuItems.interface";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const menuItems = useAppSelector((state) => state.menuItems.items);

  const [editableItems, setEditableItems] = useState(menuItems);

  useEffect(() => {
    dispatch(getMenuItems());
  }, [dispatch]);
  useEffect(() => {
    setEditableItems(menuItems);
  }, [menuItems]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: number,
    field: any
  ) => {
    const updatedItems = editableItems.map((item) =>
      item.id === id ? { ...item, [field]: e.target.value } : item
    );
    setEditableItems(updatedItems);
  };

  const handleUpdateMenuItem = ({
    id,
    title,
    description,
    category,
    price,
    image,
  }: menuItem) => {
    dispatch(
      updateMenuItems({
        id: id,
        title: title,
        description: description,
        category: category,
        price: price,
        image: image,
      })
    );
  };

  const handleDeleteMenuItems = async (itemId: number) => {
    await dispatch(deleteMenuItems(itemId));
    await dispatch(getMenuItems());
  };

  return (
    <div className="px-10">
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <h1 className="text-center text-2xl my-6">Menu Dashboard</h1>
        <table className="min-w-full table-auto text-sm text-gray-700">
          <thead className="bg-gray-100 text-xs text-gray-600 uppercase tracking-wider">
            <tr>
              <th className="px-4 py-3 text-left">ID</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Description</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Image</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
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
                      className="px-4 py-2 w-full border border-gray-300 rounded-md  "
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => handleChange(e, item.id, "description")}
                      className="px-4 py-2 w-full border border-gray-300 rounded-md  "
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      value={item.category}
                      onChange={(e) => handleChange(e, item.id, "category")}
                      className="px-4 py-2 w-full border border-gray-300 rounded-md  "
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      value={item.price}
                      onChange={(e) => handleChange(e, item.id, "price")}
                      className="px-4 py-2 w-full border border-gray-300 rounded-md  "
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="text"
                      value={item.image}
                      onChange={(e) => handleChange(e, item.id, "image")}
                      className="px-4 py-2 w-full border border-gray-300 rounded-md  "
                    />
                  </td>
                  <td className="px-4 py-3 text-center">
                    <Button
                      btnText="Submit"
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
                    />
                    <button
                      onClick={() => handleDeleteMenuItems(item.id)}
                      className="place-self-center bg-red-600 text-white text-sm py-1 px-4 ml-4 rounded hover:bg-orange-600"
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
  );
};

export default Dashboard;
