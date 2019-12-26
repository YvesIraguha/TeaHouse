import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Models from "../../models";

const { User } = Models;
const secretKey = process.env.SECRET_KEY;

const createJwtPayload = ({ email, firstName, lastName, id }) => ({
  email,
  firstName,
  lastName,
  id
});

export const createJwtToken = async user => {
  const payload = createJwtPayload(user);
  const token = await jwt.sign(payload, secretKey, { algorithm: "HS256" });
  return token;
};

export const decodeToken = async token => {
  try {
    const payload = await jwt.verify(token, secretKey);
    return payload;
  } catch (error) {
    throw new Error("Invalid token provided");
  }
};

export const hashPassword = async password => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

export const comparePasswords = async (password, hashedPassword) => {
  try {
    const matchingPassword = await bcrypt.compare(password, hashedPassword);
    return matchingPassword;
  } catch (error) {
    throw new Error("Passwords comparison failed");
  }
};

export const checkUserType = async email => {
  try {
    const user = await User.findOne({ where: { email } });
    return user;
  } catch (error) {
    throw new Error("Unable to retrieve a user");
  }
};
