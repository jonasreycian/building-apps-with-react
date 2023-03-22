import Product from "@/components/products/Product";

const ProductPage = ({ products }) => {
  return (
    <div>
      <h1>The Products Page</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductPage;

export async function getStaticProps() {
  console.log("Generating / Regenerating page for products");
  const res = await fetch("http://localhost:4000/products");
  const data = await res.json();

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
