import { useRouter } from "next/router";

const ArticleListByCategory = ({ articles, category }) => {
  return (
    <>
      <h1>News Articles | {category}</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} {article.title} | {article.category}
          </h2>
        </div>
      ))}
    </>
  );
};

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { params, req, res } = context;
  const { category } = params;

  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
  res.setHeader("Set-Cookie", ["name=John Doe", "age=20"]);

  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
