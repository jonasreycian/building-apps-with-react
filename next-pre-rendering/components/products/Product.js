import Link from "next/link";

const Product = ({ product }) => {
  return (
    <>
      <div>
        Displaying Product with ID {product.id}!
        <Link href={`/products/${product.id}`}>Go</Link>
      </div>
      <p>{product.title}</p>
      <hr />
    </>
  );
};

export default Product;
