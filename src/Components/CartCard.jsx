import { useCart } from "../context/CartContext";
export function CartCard({ product }) {
  const { removeFromCart } = useCart();
  return (
    <main>
      <div className="border-2 border-gray-200 rounded-3xl shadow-2xl flex   flex-row flex-wrap p-7 justify-between items-center m-8">
        <div>
          <img
            className=" aspect-auto max-w-28"
            src={product["Product image front"]}
            alt=""
          />
        </div>
        <div>
          <p className="font-bold text-xl">{product["Product Name"]}</p>
        </div>
        <div>
          <p className="font-bold text-xl">{`£${product[
            "RRP (£) inc VAT"
          ].toFixed(2)}`}</p>
        </div>
        <div>
          <button
            onClick={() => removeFromCart(product)}
            className="text-xl bg-red-700 rounded-lg text-white p-3 font-medium"
          >
            Remove
          </button>
        </div>
      </div>
    </main>
  );
}
