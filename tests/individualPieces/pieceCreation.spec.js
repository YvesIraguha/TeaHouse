import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../../app";
import { individualPiece, token, userToken } from "../mockData";

chai.use(chaiHttp);

describe("/api/v1/individual-pieces", () => {
  it("Create a piece successfully", done => {
    chai
      .request(app)
      .post("/api/v1/individual-pieces")
      .send(individualPiece)
      .set({ Authorization: `bearer ${token}` })
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).to.equal(201);
        expect(res.body.message).to.equal("Resource created successfully");
        expect(res.body.individualPiece.title).to.equal(individualPiece.title);
        expect(res.body.individualPiece.body).to.equal(individualPiece.body);
        expect(res.body.individualPiece.author).to.equal(individualPiece.author);
        done();
      });
  });

  it("Should fail with invalid token", done => {
    chai
      .request(app)
      .post("/api/v1/individual-pieces")
      .send(individualPiece)
      .set({ Authorization: `bearer hello` })
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).to.equal(401);
        expect(res.body.error).to.equal("Invalid token provided");
        done();
      });
  });

  it("Should fail with no token", done => {
    chai
      .request(app)
      .post("/api/v1/individual-pieces")
      .send(individualPiece)
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).to.equal(401);
        expect(res.body.error).to.equal(
          "Provide a valid token to carry out this action"
        );
        done();
      });
  });

  it("Should fail with non-admin token", done => {
    chai
      .request(app)
      .post("/api/v1/individual-pieces")
      .send(individualPiece)
      .set({ Authorization: `bearer ${userToken}` })
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).to.equal(403);
        expect(res.body.error).to.equal(
          "You have to be an admin to perform this action"
        );
        done();
      });
  });

  it("Should fail no body", done => {
    chai
      .request(app)
      .post("/api/v1/individual-pieces")
      .send({ ...individualPiece, body: "" })
      .set({ Authorization: `bearer ${token}` })
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).to.equal(400);
        expect(res.body.error).to.equal(
          'child "body" fails because ["body" is not allowed to be empty]'
        );
        done();
      });
  });

  it("Should fail with no title", done => {
    chai
      .request(app)
      .post("/api/v1/individual-pieces")
      .send({ ...individualPiece, title: "" })
      .set({ Authorization: `bearer ${token}` })
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).to.equal(400);
        expect(res.body.error).to.equal(
          'child "title" fails because ["title" is not allowed to be empty]'
        );
        done();
      });
  });

  it("Should fail with no author", done => {
    chai
      .request(app)
      .post("/api/v1/individual-pieces")
      .send({ ...individualPiece, author: "" })
      .set({ Authorization: `bearer ${token}` })
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).to.equal(400);
        expect(res.body.error).to.equal(
          'child "author" fails because ["author" is not allowed to be empty]'
        );
        done();
      });
  });
});
