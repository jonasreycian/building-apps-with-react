const Comment = ({ comment }) => {
  console.log(comment);
  return (
    <>
      <h1>Comment</h1>
      <div>
        {comment.id}. {comment.text}
      </div>
    </>
  );
};

export default Comment;

export async function getStaticPaths(context) {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { commentId } = context.params;
  console.log(`commentId: ${commentId}`);

  const comment = comments.find((comment) => comment.id === commentId);
  // const response = await fetch(
  //   `http://localhost:3000/api/comments/${commentId}`
  // );
  // const data = await response.json();

  return {
    props: {
      comment,
    },
  };
}
