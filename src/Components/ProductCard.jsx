import { Link } from "react-router";
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";

export function ProductCard({ product }) {
  const { addToCart, cartList, removeFromCart } = useCart();
  const [isItemInList, setItemInList] = useState(false);
  useEffect(() => {
    const isProductInCart = cartList.find(
      (cartItem) => cartItem["EAN number"] === product["EAN number"]
    );
    if (isProductInCart) {
      setItemInList(true);
    } else {
      setItemInList(false);
    }
  }, [cartList]);
  function handleAddProduct() {
    addToCart(product);
  }
  return (
    <div
      key={product["EAN number"]}
      className="flex flex-col justify-end max-w-96 mx-5 my-7 p-2 border rounded-xl border-gray-100 shadow-2xl "
    >
      <div className="text-2xl font-bold p-1.5 my-1.5 text-center">
        <h3>{product["Product Name"]}</h3>
      </div>
      <div className=" p-3 flex flex-row justify-center items-center">
        <img
          className=" max-w-48 aspect-auto"
          src={product["Product image front"]}
          alt=""
        />
      </div>
      <div>
        <p>
          {`${product[
            "Basic product description (add to and adapt for unique content and better rankings)"
          ].slice(0, 150)}...`}
          <Link className="text-amber-700" to="">
            Read More
          </Link>
        </p>
      </div>
      <div className="flex justify-between items-center">
        <p className="my-4 py-2 font-bold text-xl">
          <span>{`£${product["RRP (£) inc VAT"].toFixed(2)}`}</span>
        </p>
        {isItemInList ? (
          <button
            type="button"
            className="bg-red-700  rounded-lg text-white py-2 px-2"
            onClick={() => removeFromCart(product)}
          >
            Remove
          </button>
        ) : (
          <button
            type="button"
            className="bg-blue-600  rounded-lg text-white py-2 px-2"
            onClick={handleAddProduct}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
