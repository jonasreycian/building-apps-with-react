import { comments } from "../../../data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;
  const commentIndex = comments.findIndex(
    (comment) => comment.id === commentId
  );

  if (req.method === "DELETE") {
    if (commentIndex >= 0) {
      comments.splice(commentIndex, 1);
      res.status(200).json({ message: "Deleted the comment" });
    } else {
      res.status(404).json({ message: "Comment not found" });
    }
  }

  res.status(200).json(comments[commentIndex]);
}
