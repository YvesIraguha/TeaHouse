import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../../src/app";
import { individualPiece, pieceId, wrongId } from "../mockData";

chai.use(chaiHttp);

describe("/api/v1/individual-pieces", () => {
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
        expect(res.body.error).to.equal("Resource does not exist");
        done();
      });
  });

  it("should return paginated output", done => {
    chai
      .request(app)
      .get(`/api/v1/individual-pieces?page=1&type=Short story`)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(200);
        expect(res.body.data.individualPieces.length).to.equal(6);
        done();
      });
  });

  it("should return wrong type error", done => {
    chai
      .request(app)
      .get(`/api/v1/individual-pieces?page=3&type=songs`)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(400);
        expect(res.body.error).to.equal(
          'child "type" fails because ["type" must be one of [Short story, Poem]]'
        );
        done();
      });
  });

  it("should return paginated non-safe integer error", done => {
    chai
      .request(app)
      .get(`/api/v1/individual-pieces?page=9223372036854775807`)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(400);
        expect(res.body.error).to.equal(
          'child "page" fails because ["page" must be a safe number]'
        );
        done();
      });
  });
});
