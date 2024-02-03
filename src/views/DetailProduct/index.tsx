import { productType } from "@/types/product.type";

const DetailProduct = ({ product }: { product: productType }) => {
  return (
    <div className="w-1/3 p-10 text-center">
      <div className="mb-3">
        <img
          src={product.image}
          alt={product.name}
          width={400}
          className="mx-auto"
        />
      </div>
      <h4 className="font-bold">{product.name}</h4>
      <p className="font-medium text-slate-500">{product.category}</p>
      <p className=" text-slate-500">{product.description}</p>
      <p className="font-bold tracking-wide">
        {product.price &&
          product.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
      </p>
    </div>
  );
};

export default DetailProduct;
