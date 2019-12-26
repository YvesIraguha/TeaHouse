import express from "express";
import logger from "morgan";
import cors from "cors";
import piecesRouter from "./routes/individualPieces";
import authRouter from "./routes/auth";
import collectionsRouter from "./routes/collections";
import resetPasswordRouter from "./routes/users";

const app = express();
const corsOptions = {
  origin: /http:\/\/localhost:3000\/*/
};
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.use("/api/v1/individual-pieces", piecesRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/collections", collectionsRouter);
app.use("/api/v1/users", resetPasswordRouter);

// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
  res.status(404).send({ error: "Page not found" });
});

export default app;
