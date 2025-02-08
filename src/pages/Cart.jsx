import { items } from "../assets/products.js";
import { CartCard } from "../Components/CartCard.jsx";

export function Cart() {
  return (
    <main className=" mx-auto mt-7">
      <div className="p-3 ">
        <h1 className="  font-bold text-3xl">Shopping Cart Items</h1>
      </div>
      <div className="">
        {items.map((product) => (
          <CartCard product={product} key={product["EAN Number"]} />
        ))}
      </div>
    </main>
  );
}
