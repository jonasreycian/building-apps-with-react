const NewsArticleList = ({ articles }) => {
  return (
    <>
      <h1>News Articles</h1>
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

export default NewsArticleList;

export async function getServersideProps() {
  const res = await fetch("http://localhost:4000/news");
  const data = await res.json();

  console.log("Generating / Regenerating page for news");
  console.log(object);

  return {
    props: {
      articles: data,
    },
  };
}
