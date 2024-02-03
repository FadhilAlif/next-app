import { useRouter } from "next/router";

const ShopPage = () => {
  const { query } = useRouter();
  console.log(query);

  return (
    <div>
      <h1>Shop Page</h1>
      <p>Slug : {query.slug}</p>
    </div>
  );
};

export default ShopPage;
