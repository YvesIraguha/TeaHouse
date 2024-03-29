import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../../src/app";
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
        expect(res.body.error).to.equal("Collection not found");
        done();
      });
  });

  it("should return wrong type of params", done => {
    chai
      .request(app)
      .get(`/api/v1/collections/hello`)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(400);
        expect(res.body.error).to.equal(
          'child "id" fails because ["id" must be a valid GUID]'
        );
        done();
      });
  });

  it("should retrieve 10 collections per page", done => {
    chai
      .request(app)
      .get(`/api/v1/collections?page=1&type=Issues`)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(200);
        expect(res.body.data.collections.length).to.equal(6);
        done();
      });
  });

  it("should return wrong type error", done => {
    chai
      .request(app)
      .get(`/api/v1/collections?page=4&type=videos`)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(400);
        expect(res.body.error).to.equal(
          'child "type" fails because ["type" must be one of [Book series, Issues]]'
        );
        done();
      });
  });

  it("should return use correct number", done => {
    chai
      .request(app)
      .get(`/api/v1/collections?page=4546736356345363536353&type=Issues`)
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
