import jwt from "jsonwebtoken";

const { SECRET_KEY } = process.env;

export const resetPasswordToken = async email => {
  try {
    const token = await jwt.sign({ email }, SECRET_KEY, {
      algorithm: "HS256",
      expiresIn: "1h"
    });
    return token;
  } catch (error) {
    throw new Error("Something went wrong while creating a token");
  }
};
