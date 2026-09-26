import { Router } from "express";
import { PostStats } from "../stats/post-stats.js";

const router = Router();

router.get("/stats", (req, res) => {
  res.status(200).json({ totalPublished: PostStats.getTotalPublished() });
});

export default router;