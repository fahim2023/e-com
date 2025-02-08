import { CartCard } from "../Components/CartCard.jsx";
import { useCart } from "../context/CartContext.jsx";
export function Cart() {
  const { total, cartList } = useCart();
  return (
    <main className=" mx-auto mt-7">
      <div className="p-3 ">
        <h1 className="  font-bold text-2xl">Shopping Cart Items:</h1>
        <p className="text-lg py-1.5">
          You have <span className=" font-semibold">{cartList.length}</span>{" "}
          items in your cart
        </p>
        <p>Cart total: £{total}</p>
      </div>
      <div className="">
        {cartList.map((product) => (
          <CartCard product={product} key={product["EAN number"]} />
        ))}
      </div>
    </main>
  );
}
