import Link from "next/link";

const Post = ({ post }) => {
  return (
    <>
      <Link href={`posts/${post.id}`} passHref>
        <h3>
          {post.id} {post.title}
        </h3>
      </Link>
      <p>{post.body}</p>
    </>
  );
};

export default Post;
