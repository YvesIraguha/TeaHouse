import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../app";

chai.use(chaiHttp);

describe("Test dummy test", () => {
  it("Should return title ", done => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        if (err) done(err);
        expect(res.body).to.haveOwnProperty("title");
        done();
      });
  });
});
