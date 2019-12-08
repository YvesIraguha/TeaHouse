import Models from "../../models";
import { comparePasswords, createJwtToken } from "../helpers/auth";

const { User } = Models;

class LoginController {
  static async login(req, res) {
    const {
      body: { email, password }
    } = req;

    const user = await User.findOne({ where: { email } });
    if (user) {
      const comparedPassword = await comparePasswords(password, user.password);
      if (comparedPassword) {
        const token = await createJwtToken(user);
        res.status(200).send({ message: "Logged in successfully", token });
      } else {
        res.status(400).send({ error: "Invalid credentials" });
      }
    } else {
      res.status(404).send({ error: "Invalid credentials" });
    }
  }
}

export default LoginController;
