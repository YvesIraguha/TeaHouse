import { decodeToken, checkUserType } from "../helpers/auth";

export const checkAdmin = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const user = await decodeToken(token);
      const type = await checkUserType(user.id);
      if (type === "Admin") {
        req.user = user;
        next();
      } else {
        return res
          .status(403)
          .send({ message: "You have to be an admin to perform this action" });
      }
    } else {
      throw new Error("Provide a valid token to carry out this action");
    }
  } catch (error) {
    res.status(401).send({ message: error.message, status: 401 });
  }
};
