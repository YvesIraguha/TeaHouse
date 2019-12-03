import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import sinon from "sinon";
import sgMail from "@sendgrid/mail";
import app from "../../app";
import emailResponse from "../sendGridMock";
import { resetPasswordToken } from "../../helpers/users";

chai.use(chaiHttp);

describe("/api/v1/users/reset-password", () => {
  let token;
  it("should return reset password token ad reset password afterwards", done => {
    const sendEmailStub = sinon.stub(sgMail, "send");
    sendEmailStub.returns(emailResponse);
    chai
      .request(app)
      .post("/api/v1/users/reset-password")
      .send({ email: "yves.iraguha52@gmail.com" })
      .end((error, res) => {
        if (error) done(error);
        token = res.body.data.resetToken;
        expect(res.status).to.equal(201);
        expect(res.body.message).to.equal(
          "Check the email, for reset password link"
        );
        expect(res.body.data).to.haveOwnProperty("resetToken");
        chai
          .request(app)
          .put(`/api/v1/users/reset-password/${token}`)
          .send({ password: "yves@iraguha" })
          .end((err, response) => {
            if (err) done(err);
            expect(response.status).to.equal(200);
            expect(response.body.message).to.equal(
              "Password updated successfully, please login"
            );
            done();
          });
      });
  });

  it("should return access denied while using token twice", done => {
    chai
      .request(app)
      .put(`/api/v1/users/reset-password/${token}`)
      .send({ password: "yves@iraguha" })
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(403);
        expect(res.body.error).to.equal("Access denied");
        done();
      });
  });

  it("should return non-existing user error", done => {
    chai
      .request(app)
      .post("/api/v1/users/reset-password")
      .send({ email: "yvesirag@gmail.com" })
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(404);
        expect(res.body.error).to.equal("Invalid credentials");
        done();
      });
  });

  it("should return error on non-existing user token ", done => {
    resetPasswordToken("yvesirag@gmail.com")
      .then(resToken => {
        chai
          .request(app)
          .put(`/api/v1/users/reset-password/${resToken}`)
          .send({ password: "yves@yvesi" })
          .end((error, res) => {
            if (error) done(error);
            expect(res.status).to.equal(401);
            expect(res.body.error).to.equal("Unable to updated password");
            done();
          });
      })
      .catch(error => {
        done(error);
      });
  });
});

describe("Wrong route/method", () => {
  it("should return not found", done => {
    chai
      .request(app)
      .get("/api/v2/collections")
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(404);
        expect(res.body.error).to.equal("Page not found");
        done();
      });
  });

  it("should return method not allowed", done => {
    chai
      .request(app)
      .put("/api/v1/collections")
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(405);
        expect(res.body.error).to.equal("Method not allowed");
        done();
      });
  });
});
