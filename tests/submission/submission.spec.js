import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import sinon from "sinon";
import sgMail from "@sendgrid/mail";
import app from "../../src/app";
import emailResponse from "../sendGridMock";
import { collection2 } from "../mockData";

chai.use(chaiHttp);

describe("/api/v1/users/submission", () => {
  it("should send the file to the admin", done => {
    const sendEmailStub = sinon.stub(sgMail, "send");
    sendEmailStub.returns(emailResponse);
    chai
      .request(app)
      .post("/api/v1/users/submission")
      .field("type", collection2.type)
      .field("email", "iraguha@gmail.com")
      .field("fullName", collection2.author)
      .attach("file", `${__dirname}/../mockData.js`)
      .end((error, response) => {
        sendEmailStub.restore();
        if (error) done(error);
        expect(response.status).to.equal(200);
        expect(response.body.message).to.equal("Images submitted successfully");
        done();
      });
  });
});
