import sgMail from "@sendgrid/mail";
import emailTemplate from "./emailTemplate";

const baseApi = process.env.BASE_API;

const emailContent = (firstName, email, resetToken) => ({
  to: email,
  from: email,
  subject: "Reset Password Request",
  html: emailTemplate(firstName, `${baseApi + resetToken}`)
});

export const sendResetPasswordLink = async (firstName, email, resetToken) => {
  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const sendGridResponse = await sgMail.send(
      emailContent(firstName, email, resetToken)
    );
    return sendGridResponse;
  } catch (error) {
    throw new Error(error.message);
  }
};
