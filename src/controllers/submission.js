import sgMail from "@sendgrid/mail";
import submitWorkTemplate from "../helpers/submitWorkTemplate";

class Submission {
  static async submitWork(req, res) {
    try {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const { fullName, email, type } = req.body;
      const { file } = req.files;
      const sendGridResponse = await sgMail.send({
        to: "yvesiraguha52@gmail.com",
        from: email,
        subject: "Submitting a Work",
        html: submitWorkTemplate(fullName, type),
        attachments: [
          {
            content: file[0].buffer.toString("base64"),
            filename: file[0].originalname,
            type: file[0].mimetype
          }
        ]
      });
      res.status(200).send({
        message: "Book submitted successfully",
        data: { ...sendGridResponse[0] }
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default Submission;
