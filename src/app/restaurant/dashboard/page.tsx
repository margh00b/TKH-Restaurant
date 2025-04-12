"use client";

import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { getMenuItems } from "@/redux/features/menuSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const menuItems = useAppSelector((state) => state.menuItems.items);

  useEffect(() => {
    dispatch(getMenuItems());
  }, [dispatch]);

  return (
    <div className="p-10">
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">ID</th>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Description</th>
            <th className="border border-gray-400 px-4 py-2">Category</th>
            <th className="border border-gray-400 px-4 py-2">Price</th>
            <th className="border border-gray-400 px-4 py-2">Image</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-400 px-4 py-2">{item.id}</td>
              <td className="border border-gray-400 px-4 py-2">
                <input type="text" value={item.title} />
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <input type="text" value={item.description} />
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <input type="text" value={item.category} />
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <input type="text" value={item.price} />
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <input type="text" value={item.image} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
