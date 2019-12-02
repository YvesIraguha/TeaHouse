import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../../app";

chai.use(chaiHttp);

describe("/login", () => {
  const user = {
    email: "yves.iraguha52@gmail.com",
    password: "admin@admin"
  };
  it("should login successfully", done => {
    chai
      .request(app)
      .post("/api/v1/auth/login")
      .send(user)
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal("Logged in successfully");
        expect(res.body).to.haveOwnProperty("token");
        done();
      });
  });

  it("should fail wrong password", done => {
    chai
      .request(app)
      .post("/api/v1/auth/login")
      .send({ email: user.email, password: "hello" })
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).to.equal(400);
        expect(res.body.error).to.equal("Invalid credentials");
        done();
      });
  });

  it("should fail wrong email", done => {
    chai
      .request(app)
      .post("/api/v1/auth/login")
      .send({ email: "email@gmail.com", password: "hello" })
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).to.equal(404);
        expect(res.body.error).to.equal("Invalid credentials");
        done();
      });
  });

  it("should fail malformed email", done => {
    chai
      .request(app)
      .post("/api/v1/auth/login")
      .send({ email: "emailgmail.com", password: "hello" })
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).to.equal(400);
        expect(res.body).to.haveOwnProperty("error");
        done();
      });
  });

  it("should fail weak password", done => {
    chai
      .request(app)
      .post("/api/v1/auth/login")
      .send({ email: "email123@gmail.com", password: "he" })
      .end((err, res) => {
        if (err) done(err);
        expect(res.status).to.equal(400);
        expect(res.body).to.haveOwnProperty("error");
        done();
      });
  });
});
