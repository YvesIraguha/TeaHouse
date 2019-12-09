export default (req, res) => {
  res.status(405).send({ error: "Method not allowed" });
};
