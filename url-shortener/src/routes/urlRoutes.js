import express from "express";
import {
  createShortUrl,
  redirectToOriginalUrl,
  getAllUrls,
} from "../controllers/urlController.js";

const router = express.Router();

router.post("/shorten", createShortUrl);
router.get("/all", getAllUrls);
router.get("/:shortCode", redirectToOriginalUrl);

export default router;