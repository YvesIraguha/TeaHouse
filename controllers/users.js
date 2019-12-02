import Models from "../models";
import { resetPasswordToken } from "../helpers/users";
import { hashPassword } from "../helpers/auth";
import { sendResetPasswordLink } from "../helpers/sendEmail";

const { User } = Models;

class ResetPassword {
  static async createToken(req, res) {
    const {
      body: { email }
    } = req;

    const user = await User.findOne({ where: { email } });
    if (user) {
      const token = await resetPasswordToken(email);
      const userWithToken = await User.update(
        { resetToken: token },
        { where: { email }, returning: true }
      );
      const { id, resetToken, firstName } = userWithToken[1][0];
      const sendGridResponse = await sendResetPasswordLink(
        firstName,
        email,
        resetToken
      );

      if (sendGridResponse.length && sendGridResponse[0].statusCode === 202) {
        res.status(201).send({
          message: "Check the email, for reset password link",
          data: { id, email, resetToken }
        });
      } else {
        res.status(500).send({
          message: "Unable to send the email with sendgrid"
        });
      }
    } else {
      res.status(404).send({ message: "Invalid credentials " });
    }
  }

  static async updatePassword(req, res) {
    const { password } = req.body;
    const { email } = req.user;

    const newPassword = await hashPassword(password);
    const updatedUser = await User.update(
      { password: newPassword, resetToken: "" },
      { where: { email }, returning: true }
    );

    if (updatedUser[0]) {
      const { id } = updatedUser[1][0];
      res.status(200).send({
        message: "Password updated successfully, please login",
        user: { email, id }
      });
    } else {
      res.status(404).send({ message: "Unable to updated password" });
    }
  }
}

export default ResetPassword;
