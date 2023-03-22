import Link from "next/link";
import { useRouter } from "next/router";

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

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
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json();

  const sliceData = data.slice(0, 5);
  console.log(JSON.stringify(sliceData));
  data = sliceData;
  const paths = data.map((post) => ({
    params: { postId: post.id.toString() },
  }));

  return {
    // paths: [
    //   // Determines which paths will be pre-rendered
    //   // Checkout the posts data from getStaticProps
    //   { params: { postId: "1" } },
    //   { params: { postId: "2" } },
    //   { params: { postId: "3" } },
    // ],
    paths,

    // false: the paths returned from getStaticPaths will be rendered to HTML at build time by getStaticProps
    //        any paths not returned by getStaticPaths will result in a 404 page
    // true: the paths returned from getStaticPaths will be rendered to HTML at request time by getStaticProps
    // blocking: the paths returned from getStaticPaths will be rendered to HTML at request time by getStaticProps
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { postId } = params;

  console.log(`Generating page for post: ${postId}`);

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await res.json();

  if (!!!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}
