import express from "express";
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ msg: "User route working" });
});

export default router;