import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { getCart, clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",

//   },
//   {

//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,

//   },
// ];

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="py-4 px-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">
        Your cart, <span className="uppercase">{username}</span>
      </h2>
      <ul className="divide-y divide-stone-200 border-b mt-3">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
