import { Collection } from "../models";

export const checkCollectionPresence = async (req, res, next) => {
  const { id } = req.params;
  const collection = await Collection.findOne({ where: { id } });
  if (!collection) {
    res.status(404).send({ message: "Collection does not exist" });
  } else {
    req.collection = collection;
    next();
  }
};
