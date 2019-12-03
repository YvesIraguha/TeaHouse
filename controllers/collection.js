import Models from "../models";
import {
  uploadFile,
  deleteFile,
  extractCloudinaryOutput
} from "../helpers/uploadFileCloudinary";

const { Collection } = Models;

class CollectionController {
  static async create(req, res) {
    const { type, title, author } = req.body;
    const { id: userId } = req.user;
    const { files } = req;
    const { file, previewImage } = files;
    const result = await Promise.all([
      await uploadFile(file[0]),
      await uploadFile(previewImage[0])
    ]);

    const cloudinaryOutput = extractCloudinaryOutput(result);
    const createdCollection = await Collection.create({
      type,
      title,
      author,
      ...cloudinaryOutput,
      userId
    });

    res
      .status(201)
      .send({ message: "Collection uploaded successfully", createdCollection });
  }

  static async fetchOne(req, res) {
    const { id } = req.params;
    const collection = await Collection.findOne({ where: { id } });
    if (collection) {
      res.status(200).send({
        message: "Resource retrieved successfully",
        collection
      });
    } else {
      res.status(404).send({ error: "Collection not found" });
    }
  }

  static async deleteOne(req, res) {
    const { id } = req.params;
    const { previewPublicId, collectionPublicId } = req.collection;
    const result = await Promise.all([
      await deleteFile(previewPublicId),
      await deleteFile(collectionPublicId)
    ]);
    if (result) {
      const deletedCollection = await Collection.destroy({ where: { id } });
      if (deletedCollection) {
        res.status(200).send({ message: "Collection deleted successfully" });
      } else {
        res.status(404).send({ error: "Collection does not exist", result });
      }
    } else {
      res.status(404).send({ error: "Collection does not exist" });
    }
  }

  static async updateCollection(req, res) {
    const { id } = req.params;
    const { body } = req;
    const updatedCollection = await Collection.update(
      { ...body },
      { where: { id }, returning: true }
    );
    if (updatedCollection[0]) {
      res.status(200).send({
        message: "Collection updated successfully",
        collection: updatedCollection[1][0]
      });
    } else {
      res.status(404).send({ error: "Collection does not exist" });
    }
  }

  static async getAll(req, res) {
    const { page, type } = req.query;
    const collections = await Collection.findAll({
      where: { type },
      offset: (page - 1) * 10,
      limit: 10
    });
    if (collections.length) {
      res.status(200).send({ message: "Data retrieved successfully", collections });
    } else {
      res.status(404).send({ error: "Data not found" });
    }
  }
}

export default CollectionController;
