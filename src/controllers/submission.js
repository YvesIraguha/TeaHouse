import sgMail from "@sendgrid/mail";
import submitWorkTemplate from "../helpers/submitWorkTemplate";

const senderAddress = process.env.EMAIL;
class Submission {
  static async submitWork(req, res) {
    try {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const { fullName, email, type } = req.body;
      const { file } = req.files;
      const sendGridResponse = await sgMail.send({
        to: senderAddress,
        from: senderAddress,
        subject: "Submitting a Work",
        html: submitWorkTemplate(fullName, type, email),
        attachments: [
          {
            content: file[0].buffer.toString("base64"),
            filename: file[0].originalname,
            type: file[0].mimetype
          }
        ]
      });
      res.status(200).send({
        message: `${type} submitted successfully`,
        data: { ...sendGridResponse[0] }
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default Submission;
