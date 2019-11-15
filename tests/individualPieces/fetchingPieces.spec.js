import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../../app";
import { individualPiece, pieceId, wrongId } from "../mockData";

chai.use(chaiHttp);

describe("/api/v1/individual-pieces/pieceId", () => {
  it("should retrieve data successfully", done => {
    chai
      .request(app)
      .get(`/api/v1/individual-pieces/${pieceId}`)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(200);
        expect(res.body.individualPiece).to.be.a("object");
        expect(res.body.individualPiece.title).to.equal(individualPiece.title);
        expect(res.body.individualPiece.type).to.equal(individualPiece.type);
        expect(res.body.individualPiece.body).to.equal(individualPiece.body);
        done();
      });
  });

  it("should retrieve not found", done => {
    chai
      .request(app)
      .get(`/api/v1/individual-pieces/${wrongId}`)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(404);
        expect(res.body.message).to.equal("Resource does not exist");
        done();
      });
  });
});
