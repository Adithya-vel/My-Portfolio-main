import express from "express";

import {
  createShortUrl,
  redirectToOriginalUrl,
  getAllUrls,
  deleteUrl,
} from "../controllers/urlController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/shorten", protect, createShortUrl);

router.get("/all", protect, getAllUrls);

router.delete("/:id", protect, deleteUrl);

router.get("/:shortCode", redirectToOriginalUrl);

export default router;