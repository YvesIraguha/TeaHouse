import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "admin resides here" });
});

export default router;
