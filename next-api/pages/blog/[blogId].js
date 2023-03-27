import Head from "next/head";

export default function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="blog">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </>
  );
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { blogId: "1" } },
//       { params: { blogId: "2" } },
//       { params: { blogId: "3" } },
//     ],
//     fallback: false,
//   };
// }

export async function getServerSideProps() {
  return {
    props: {
      title: "Article 1",
      description: "This is the description of the article 1",
    },
  };
}
