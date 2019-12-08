import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../../src/app";
import { userToken, individualPiece, token, pieceId, wrongId } from "../mockData";

chai.use(chaiHttp);

describe("/api/v1/individual-pieces/pieceId", () => {
  it("should update resource successfully", done => {
    chai
      .request(app)
      .put(`/api/v1/individual-pieces/${pieceId}`)
      .set({ Authorization: `bearer ${token}` })
      .send(individualPiece)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal("Resource updated successfully");
        expect(res.body.individualPiece.title).to.equal(individualPiece.title);
        expect(res.body.individualPiece.body).to.equal(individualPiece.body);
        done();
      });
  });

  it("should fail update resource with wrong pieceId", done => {
    chai
      .request(app)
      .put(`/api/v1/individual-pieces/${wrongId}`)
      .set({ Authorization: `bearer ${token}` })
      .send(individualPiece)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(404);
        expect(res.body.error).to.equal("Resource does not exist");
        done();
      });
  });

  it("should fail update resource with wrong token", done => {
    chai
      .request(app)
      .put(`/api/v1/individual-pieces/${pieceId}`)
      .set({ Authorization: `bearer hello` })
      .send(individualPiece)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(401);
        expect(res.body.error).to.equal("Invalid token provided");
        done();
      });
  });

  it("should fail update resource with non-admin token", done => {
    chai
      .request(app)
      .put(`/api/v1/individual-pieces/${pieceId}`)
      .set({ Authorization: `bearer ${userToken}` })
      .send(individualPiece)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(403);
        expect(res.body.error).to.equal(
          "You have to be an admin to perform this action"
        );
        done();
      });
  });

  it("should fail update resource with wrong data", done => {
    chai
      .request(app)
      .put(`/api/v1/individual-pieces/${pieceId}`)
      .set({ Authorization: `bearer ${token}` })
      .send({ title: "112" })
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(400);
        expect(res.body.error).to.equal(
          'child "title" fails because ["title" length must be at least 10 characters long]'
        );
        done();
      });
  });
});
