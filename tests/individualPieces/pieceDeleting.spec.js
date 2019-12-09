import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../../src/app";
import { userToken, token, deleteId, wrongId } from "../mockData";

chai.use(chaiHttp);

describe("/api/v1/individual-pieces", () => {
  it("should delete a piece successfully", done => {
    chai
      .request(app)
      .delete(`/api/v1/individual-pieces/${deleteId}`)
      .set({ Authorization: `bear ${token}` })
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal("Resource deleted successfully");
        done();
      });
  });

  it("should fail deleting non-existing resource", done => {
    chai
      .request(app)
      .delete(`/api/v1/individual-pieces/${wrongId}`)
      .set({ Authorization: `bear ${token}` })
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(404);
        expect(res.body.error).to.equal("Resource does not exist");
        done();
      });
  });

  it("should fail deleting with a non-admin token", done => {
    chai
      .request(app)
      .delete(`/api/v1/individual-pieces/${deleteId}`)
      .set({ Authorization: `bearer ${userToken}` })
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(403);
        expect(res.body.error).to.equal(
          "You have to be an admin to perform this action"
        );
        done();
      });
  });

  it("should fail deleting with a wrong token", done => {
    chai
      .request(app)
      .delete(`/api/v1/individual-pieces/${deleteId}`)
      .set({ Authorization: `bearer hello` })
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(401);
        expect(res.body.error).to.equal("Invalid token provided");
        done();
      });
  });
});
