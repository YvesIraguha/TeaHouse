import { decodeToken } from "../helpers/auth";

export const checkAdmin = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const user = await decodeToken(token);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ message: error.message, status: 401 });
  }
};
