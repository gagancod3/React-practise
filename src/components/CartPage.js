import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const CartPage = () => {

  const dispatch = useDispatch();
  const HandleClearCart = () => {
        dispatch(clearCart());
  }
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="p-4 m-4 text-center">
      <h1 className="font-bold text-2xl"> Cart</h1>
      <h2>Carts here</h2>
      <div className="w-6/12 m-auto p-2">
        <ItemList items={cartItems} />
      </div>
      <div>
        <button className="p-2 m-2 rounded-lg bg-slate-200 cursor-pointer hover:bg-slate-300 hover:scale-105 duration-300"
        onClick={HandleClearCart}
        >CLEAR</button>
        {cartItems.length == 0 && <h2>Your Cart is empty. Add items to the Cart!</h2>}
      </div>
    </div>
  );
};
export default CartPage;
