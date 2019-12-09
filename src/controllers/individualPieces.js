import Models from "../../models";
import { generateSlug } from "../helpers/individualPiece";

const { Piece } = Models;

class IndividualPieceController {
  static async create(req, res) {
    const { body } = req;
    const {
      user: { id: userId }
    } = req;
    const slug = generateSlug(body.title);

    const createdPiece = await Piece.create({ ...body, userId, slug });
    res.status(201).send({
      message: "Resource created successfully",
      individualPiece: createdPiece
    });
  }

  static async fetchOnePiece(req, res) {
    const { id } = req.params;
    const piece = await Piece.findOne({ where: { id } });

    if (piece) {
      res.status(200).send({
        message: "Resource retrieved successfully",
        individualPiece: piece
      });
    } else {
      res.status(404).send({ error: "Resource does not exist" });
    }
  }

  static async deleteOnePiece(req, res) {
    const { id } = req.params;
    const deletedPiece = await Piece.destroy({ where: { id } });
    if (deletedPiece) {
      res.status(200).send({ message: "Resource deleted successfully" });
    } else {
      res.status(404).send({ error: "Resource does not exist" });
    }
  }

  static async updateOnePiece(req, res) {
    const { id } = req.params;
    const { body } = req;

    const updatedPiece = await Piece.update(
      { ...body },
      { where: { id }, returning: true }
    );

    if (updatedPiece[0]) {
      res.status(200).send({
        message: "Resource updated successfully",
        individualPiece: updatedPiece[1][0]
      });
    } else {
      res.status(404).send({ error: "Resource does not exist" });
    }
  }

  static async getAll(req, res) {
    const { page, type } = req.query;
    const individualPieces = await Piece.findAll({
      where: { type },
      offset: (page - 1) * 6,
      limit: 6
    });
    if (individualPieces.length) {
      return res
        .status(200)
        .send({ message: "Data retrieved successfully", individualPieces });
    }
    res.status(404).send({ error: "Data not found" });
  }
}

export default IndividualPieceController;
