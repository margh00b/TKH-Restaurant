"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Admin = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("/restaurant/admin/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.message);
        return;
      }

      router.push("/restaurant/orders");
    } catch (err) {
      setError("An error occurred");
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-center p-10 mt-20">
        <form
          className="flex flex-col items-center p-10 border-2 border-gray-200 shadow-lg rounded-2xl"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-b-2 p-2 outline-0"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-b-2 p-2 outline-0"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 px-5 mt-5 rounded-lg hover:shadow-lg duration-300"
          >
            Login
          </button>
        </form>
      </div>
      {!!error && !!error.length && (
        <div className="flex justify-center mt-5">
          <p className="text-red-500">{error}</p>
        </div>
      )}
    </div>
  );
};

export default Admin;
