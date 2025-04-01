import { useAppDispatch } from "@/redux/store";
import { setCart, setComingFromConfirmation } from "@/redux/features/cartSlice";
import { useRouter } from "next/navigation";

export const useHandleReturn = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleReturn = () => {
    dispatch(setCart({ items: [], show: false }));
    dispatch(setComingFromConfirmation(true));
    router.push("/");
  };

  return handleReturn;
};