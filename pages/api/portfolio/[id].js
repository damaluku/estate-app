import db from "../data";

export default function handler({ query: { id } }, res) {
  const data = db.filter((item) => item.id === id);
  if (data.length > 0) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: `${id} not found` });
  }
}
