import db from "../data";

/* export default function handler(req, res) {
  const { id } = req.query;
  const { posts } = data;

  if (id) {
    const post = posts.find((value) => value.id == id);
    return res.status(200).json(post);
  }

  return res.status(404).json({ error: "Not Found" });
} */

export default function handler({ query: { id } }, res) {
  const data = db.filter((item) => item.id === id);
  if (data.length > 0) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: `${id} not found` });
  }
}
