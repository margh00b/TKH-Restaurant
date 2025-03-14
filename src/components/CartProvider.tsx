"use client";

import { initializeCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/store";
import { useEffect } from "react";

export function CartProvider({ children }: { children: React.ReactNode }) {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(initializeCart());
    }, [dispatch]);
    return <>{children}</>;
}
