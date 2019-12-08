import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import sinon from "sinon";
import cloudinary from "cloudinary";
import app from "../../src/app";
import {
  collection2,
  token,
  userToken,
  uploadResponse,
  uploadResponse2
} from "../mockData";

chai.use(chaiHttp);

describe("Post /api/v1/collections", () => {
  it("should upload a book successfully", done => {
    const uploadStub = sinon.stub(cloudinary.v2.uploader, "upload");
    uploadStub.onCall(0).returns(uploadResponse);
    uploadStub.onCall(1).returns(uploadResponse2);
    chai
      .request(app)
      .post("/api/v1/collections")
      .set({ Authorization: `Bearer ${token}` })
      .field("title", collection2.title)
      .field("type", collection2.type)
      .field("author", collection2.type)
      .attach("file", `${__dirname}/../mockData.js`)
      .attach("previewImage", `${__dirname}/../mockData.js`)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(201);
        expect(uploadStub.calledTwice).to.equal(true);
        expect(res.body.message).to.equal("Collection uploaded successfully");
        expect(res.body.createdCollection.type).to.equal(collection2.type);
        expect(res.body.createdCollection.previewPublicId).to.equal(
          uploadResponse.public_id
        );
        expect(res.body.createdCollection.collectionPublicId).to.equal(
          uploadResponse2.public_id
        );
        expect(res.body.createdCollection.previewUrl).to.equal(uploadResponse.url);
        expect(res.body.createdCollection.collectionUrl).to.equal(
          uploadResponse2.url
        );
        done();
      });
  });

  it("should fail with no/wrong token", done => {
    chai
      .request(app)
      .post("/api/v1/collections")
      .set({ Authorization: `Bearer hello` })
      .field("title", collection2.title)
      .field("type", collection2.type)
      .field("author", collection2.type)
      .attach("file", `${__dirname}/../mockData.js`)
      .attach("previewImage", `${__dirname}/../mockData.js`)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(401);
        expect(res.body.error).to.equal("Invalid token provided");
        done();
      });
  });

  it("Should fail with non-admin token", done => {
    chai
      .request(app)
      .post("/api/v1/collections")
      .field("title", collection2.title)
      .field("type", collection2.type)
      .field("author", collection2.type)
      .attach("file", `${__dirname}/../mockData.js`)
      .attach("previewImage", `${__dirname}/../mockData.js`)
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

  it("Should fail no file", done => {
    chai
      .request(app)
      .post("/api/v1/collections")
      .send({ ...collection2 })
      .set({ Authorization: `bearer ${token}` })
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).to.equal(400);
        expect(res.body.error).to.equal(
          'child "files" fails because ["files" is required]'
        );
        done();
      });
  });

  it("Should fail wrong type", done => {
    chai
      .request(app)
      .post("/api/v1/collections")
      .send({ ...collection2, type: "" })
      .set({ Authorization: `bearer ${token}` })
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).to.equal(400);
        expect(res.body.error).to.equal(
          'child "type" fails because ["type" is not allowed to be empty]'
        );
        done();
      });
  });
});
