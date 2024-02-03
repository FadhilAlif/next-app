import { fetcher } from "@/lib/swr/fetcher";
import ProductViews from "@/views/products";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();

  useEffect(() => {
    if (isLogin === false) {
      push("/auth/login");
    }
  }, []);

  const { data, error, isLoading } = useSWR("/api/product", fetcher);
  // console.log(data);
  // console.log(error);
  // console.log(isLoading);

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setProducts(response.data);
  //     });
  // }, []);

  return (
    <div>
      <ProductViews products={isLoading ? [] : data.data} />
    </div>
  );
};

export default ProductPage;
