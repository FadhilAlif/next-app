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

// TODO : Server Side Request
export async function getServerSideProps() {
  // Fetch Data
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
  };
}
