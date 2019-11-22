import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../../app";
import {
  userToken,
  collection2,
  collection,
  token,
  pieceId,
  wrongId
} from "../mockData";

chai.use(chaiHttp);

describe("Put /api/v1/collections/pieceId", () => {
  it("should update resource successfully", done => {
    chai
      .request(app)
      .put(`/api/v1/collections/${pieceId}`)
      .set({ Authorization: `bearer ${token}` })
      .send(collection2)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal("Collection updated successfully");
        expect(res.body.collection.title).to.equal(collection.title);
        expect(res.body.collection.author).to.equal(collection.author);
        done();
      });
  });

  it("should fail update resource with wrong pieceId", done => {
    chai
      .request(app)
      .put(`/api/v1/collections/${wrongId}`)
      .set({ Authorization: `bearer ${token}` })
      .send(collection2)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(404);
        expect(res.body.message).to.equal("Collection does not exist");
        done();
      });
  });

  it("should fail update resource with wrong token", done => {
    chai
      .request(app)
      .put(`/api/v1/collections/${pieceId}`)
      .set({ Authorization: `bearer hello` })
      .send(collection2)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(401);
        expect(res.body.message).to.equal("Invalid token provided");
        done();
      });
  });

  it("should fail update resource with non-admin token", done => {
    chai
      .request(app)
      .put(`/api/v1/collections/${pieceId}`)
      .set({ Authorization: `bearer ${userToken}` })
      .send(collection2)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(403);
        expect(res.body.message).to.equal(
          "You have to be an admin to perform this action"
        );
        done();
      });
  });

  it("should fail update resource with wrong data", done => {
    chai
      .request(app)
      .put(`/api/v1/collections/${pieceId}`)
      .set({ Authorization: `bearer ${token}` })
      .send({ title: "112" })
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(400);
        expect(res.body.message).to.equal(
          'child "title" fails because ["title" length must be at least 10 characters long]'
        );
        done();
      });
  });
});
