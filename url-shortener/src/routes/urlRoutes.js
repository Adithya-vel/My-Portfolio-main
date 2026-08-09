import express from "express";
import {
  createShortUrl,
  redirectToOriginalUrl,
  getAllUrls,
} from "../controllers/urlController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/shorten", protect, createShortUrl);
router.get("/all", protect, getAllUrls);
router.get("/:shortCode", redirectToOriginalUrl);

export default router;