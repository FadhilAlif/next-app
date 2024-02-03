import { productType } from "@/types/product.type";
import ProductViews from "@/views/products";

const ProductPage = ({ products }: { products: productType[] }) => {
  return (
    <div>
      <ProductViews products={products} />
    </div>
  );
};

export default ProductPage;

export async function getStaticProps() {
  // Fetch Data
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
  };
}
