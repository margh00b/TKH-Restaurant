import CartItems from "@/app/components/Cart/subcomponents/CartItems/cartItems";
import { useAppSelector } from "@/redux/store";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  return (
    <div
      className={`shadow-lg z-50 flex flex-col h-[89vh] fixed right-0 top-20 bg-white overflow-y-auto p-4 w-[30%]`}
    >
      <div className={`text-center`}>
        <h1 className="text-2xl">This is a Pick-up order</h1>
        <p className={`mx-10 my-5`}>
          You&apos;ll need to go to Tandoori Kabab Hut to pick up this order.
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.847297969018!2d-113.965408!3d51.037441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53717b1c0749fc23%3A0x8295c036104a165c!2sTandoori%20Kabab%20Hut!5e0!3m2!1sen!2sca!4v1717361487892!5m2!1sen!2sca"
        width="100%"
        height="200"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      {
        cartItems.map((item) => <CartItems key={item.id} item={item} />)
      }
      {
        cartItems.length === 0 && <h1 className={`text-center pt-5`}>Cart is empty</h1>
      }
    </div>
  );
};
export default Cart;
