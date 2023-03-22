import Link from "next/link";
import { useRouter } from "next/router";

const Product = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>Displaying Product with ID {product.id}!</div>
      <p>{product.title}</p>
      <Link href="/products">Back</Link>
      <hr />
    </>
  );
};

export default Product;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/products");
  const data = await res.json();

  return {
    paths: data.map((product) => ({
      params: { productId: product.id.toString() },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { productId } = params;

  const res = await fetch(`http://localhost:4000/products/${productId}`);
  const data = await res.json();

  console.log(`Regenerating page for product: ${productId}`);
  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}
