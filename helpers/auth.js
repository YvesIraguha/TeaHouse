import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const secretKey = process.env.SECRET_KEY;

const createJwtPayload = ({ email, firstName, lastName, id }) => ({
  email,
  firstName,
  lastName,
  id
});

export const createJwtToken = async user => {
  try {
    const payload = createJwtPayload(user)
    const token = await jwt.sign(payload, secretKey, { algorithm: "HS256" });
    return token;
  } catch (error) {
    throw new Error("Something went wrong while creating a token");
  }
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
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    throw new Error("Unable to create a hashed password");
  }
};

export const comparePasswords = async (password, hashedPassword) => {
  try {
    const matchingPassword = await bcrypt.compare(password, hashedPassword);
    return matchingPassword;
  } catch (error) {
    throw new Error("Passwords comparison failed");
  }
};
