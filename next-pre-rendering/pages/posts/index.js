import Post from "@/components/posts/post";
import Link from "next/link";

const PostPage = ({ posts }) => {
  return (
    <>
      <h1>List of Posts</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <Post post={post} />
          <hr />
        </div>
      ))}
    </>
  );
};

export default PostPage;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
