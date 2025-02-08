import { Link } from "react-router";

export function ProductCard({ product, setCartList, cartList }) {
  function handleAddItem() {}
  return (
    <div
      key={product["EAN Number"]}
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
        <button
          type="button"
          className="bg-blue-600  rounded-lg text-white py-2 px-2"
          onClick={() => handleAddItem(product["EAN Number"])}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
