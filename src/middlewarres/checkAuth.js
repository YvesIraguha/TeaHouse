import { decodeToken, checkUserType } from "../helpers/auth";

export const checkAdmin = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const user = await decodeToken(token);
      const type = await checkUserType(user.email);
      if (type.role === "Admin") {
        req.user = user;
        next();
      } else {
        return res
          .status(403)
          .send({ error: "You have to be an admin to perform this action" });
      }
    } else {
      throw new Error("Provide a valid token to carry out this action");
    }
  } catch (error) {
    res.status(401).send({ error: error.message, status: 401 });
  }
};

export const checkToken = async (req, res, next) => {
  try {
    const { token } = req.params;
    const decodedToken = await decodeToken(token);
    const user = await checkUserType(decodedToken.email);

    if (token === user.resetToken) {
      req.user = user;
      next();
    } else {
      res.status(403).send({ error: "Access denied", status: 403 });
    }
  } catch (error) {
    res.status(401).send({ error: "Unable to updated password", status: 401 });
  }
};
