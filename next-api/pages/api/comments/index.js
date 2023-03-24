import { comments } from "../../../data/comments";

export default function handler(req, res) {
  if (req.method === "POST") {
    const comment = req.body.comment;
    const id = Date.now();
    const newComment = { id, name: "Anonymous", text: comment };
    comments.push(newComment);
    res.status(201).json(newComment);
  }

  res.status(200).json(comments);
}
