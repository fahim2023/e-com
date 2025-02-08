import { ProductCard } from "../Components";
import { items } from "../assets/products.js";

export function Home() {
  return (
    <main className="mt-8">
      <div className="flex flex-row flex-wrap justify-center">
        {items.map((product) => (
          <ProductCard product={product} key={product["EAN Number"]} />
        ))}
      </div>
    </main>
  );
}
