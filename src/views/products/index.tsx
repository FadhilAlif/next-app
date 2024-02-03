import { productType } from "@/types/product.type";
import Link from "next/link";

const ProductViews = ({ products }: { products: productType[] }) => {
  console.log(products);
  return (
    <div className="w-full px-10 py-5">
      <h1 className="text-4xl text-center font-bold mb-5">Our Product</h1>
      <div className="flex">
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="w-1/3 p-5"
          >
            <div className="w-full mb-3 hover:scale-105 duration-300">
              <img src={product.image} alt={product.name} />
            </div>
            <h4 className="font-bold">{product.name}</h4>
            <p className="font-medium text-slate-500">{product.category}</p>
            <p className="font-bold tracking-wide">
              {product.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductViews;
