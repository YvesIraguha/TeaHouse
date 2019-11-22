import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import sinon from "sinon";
import cloudinary from "cloudinary";
import app from "../../app";
import {
  userToken,
  token,
  deleteId,
  wrongId,
  deleteCollectionResult
} from "../mockData";

chai.use(chaiHttp);

describe("Delete /api/v1/collections ", () => {
  it("should delete a piece successfully", done => {
    const deleteStub = sinon.stub(cloudinary.v2.uploader, "destroy");
    deleteStub.onCall(0).returns(deleteCollectionResult);
    deleteStub.onCall(1).returns(deleteCollectionResult);
    chai
      .request(app)
      .delete(`/api/v1/collections/${deleteId}`)
      .set({ Authorization: `bearer ${token}` })
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal("Collection deleted successfully");
        done();
      });
  });

  it("should fail deleting non-existing resource", done => {
    chai
      .request(app)
      .delete(`/api/v1/collections/${wrongId}`)
      .set({ Authorization: `bearer ${token}` })
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(404);
        expect(res.body.message).to.equal("Collection does not exist");
        done();
      });
  });

  it("should fail deleting with a non-admin token", done => {
    chai
      .request(app)
      .delete(`/api/v1/collections/${deleteId}`)
      .set({ Authorization: `bearer ${userToken}` })
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(403);
        expect(res.body.message).to.equal(
          "You have to be an admin to perform this action"
        );
        done();
      });
  });

  it("should fail deleting with a wrong token", done => {
    chai
      .request(app)
      .delete(`/api/v1/collections/${deleteId}`)
      .set({ Authorization: `bearer hello` })
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(401);
        expect(res.body.message).to.equal("Invalid token provided");
        done();
      });
  });
});
