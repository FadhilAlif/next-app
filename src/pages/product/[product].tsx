import { fetcher } from "@/lib/swr/fetcher";
import DetailProduct from "@/views/DetailProduct";
import { useRouter } from "next/router";
import useSWR from "swr";

const DetailProductPage = () => {
  const { query } = useRouter();
  // console.log(query);

  const { data, error, isLoading } = useSWR(
    `/api/product/${query.product}`,
    fetcher
  );
  console.log(data);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">Detail Product :</h1>
      <DetailProduct product={isLoading ? [] : data.data} />
    </div>
  );
};

export default DetailProductPage;
