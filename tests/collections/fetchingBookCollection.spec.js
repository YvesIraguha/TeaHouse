import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../../app";
import { collection, pieceId, wrongId } from "../mockData";

chai.use(chaiHttp);

describe("Get /api/v1/collections/collectionId", () => {
  it("should retrieve data successfully", done => {
    chai
      .request(app)
      .get(`/api/v1/collections/${pieceId}`)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(200);
        expect(res.body.collection).to.be.a("object");
        expect(res.body.collection.title).to.equal(collection.title);
        expect(res.body.collection.type).to.equal(collection.type);
        expect(res.body.collection.previewUrl).to.equal(collection.previewUrl);
        expect(res.body.collection.previewPublicId).to.equal(
          collection.previewPublicId
        );
        expect(res.body.collection.collectionUrl).to.equal(collection.collectionUrl);
        expect(res.body.collection.collectionPublicId).to.equal(
          collection.collectionPublicId
        );
        done();
      });
  });

  it("should retrieve not found", done => {
    chai
      .request(app)
      .get(`/api/v1/collections/${wrongId}`)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(404);
        expect(res.body.message).to.equal("Collection does not exist");
        done();
      });
  });
});
