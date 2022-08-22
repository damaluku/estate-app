import data from "../data.json";

export default function handler(req, res, next) {
  const { posts } = data;
  if (posts) return res.status(200).json(posts);
  return res.status(404).json({ error: "Not Found" });
}
