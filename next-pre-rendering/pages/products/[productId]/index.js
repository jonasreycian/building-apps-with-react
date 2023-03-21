import { useRouter } from "next/router";

const Product = ({ productId }) => {
  // const { data, error } = useSWR(`/api/products/${productId}`, fetcher);

  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;
  return (
    <>
      <div>Displaying Product with ID {productId}!</div>
    </>
  );
};

export default Product;
