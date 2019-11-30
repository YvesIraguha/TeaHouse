import createError from "http-errors";
import express from "express";
import logger from "morgan";

import piecesRouter from "./routes/individualPieces";
import authRouter from "./routes/auth";
import collectionsRouter from "./routes/collections";
import resetPasswordRouter from "./routes/users";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/individual-pieces", piecesRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/collections", collectionsRouter);
app.use("/api/v1/users", resetPasswordRouter);
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ message: "error is happening over" });
});

export default app;
