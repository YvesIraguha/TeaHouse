import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import sinon from "sinon";
import sgMail from "@sendgrid/mail";
import app from "../../app";
import emailResponse from "../sendGridMock";

chai.use(chaiHttp);

describe("/api/v1/users/reset-password", () => {
  it("should return reset password token ad reset password afterwards", done => {
    const sendEmailStub = sinon.stub(sgMail, "send");
    sendEmailStub.returns(emailResponse);
    chai
      .request(app)
      .post("/api/v1/users/reset-password")
      .send({ email: "yves.iraguha52@gmail.com" })
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(201);
        expect(res.body.message).to.equal(
          "Check the email, for reset password link"
        );
        expect(res.body.data).to.haveOwnProperty("resetToken");
        chai
          .request(app)
          .put(`/api/v1/users/reset-password/${res.body.data.resetToken}`)
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
});
