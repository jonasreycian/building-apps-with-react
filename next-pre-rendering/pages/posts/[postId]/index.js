import Link from "next/link";

const Post = ({ post }) => {
  return (
    <>
      <Link href="/posts">Back</Link>
      <h3>
        {post.id} {post.title}
      </h3>
      <p>{post.body}</p>
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  return {
    paths: [
      // Determines which paths will be pre-rendered
      // Checkout the posts data from getStaticProps
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { postId } = params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}
