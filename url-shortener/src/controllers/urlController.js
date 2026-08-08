import { nanoid } from "nanoid";
import Url from "../models/Url.js";

export const createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({
        message: "Original URL is required",
      });
    }

    const shortCode = nanoid(6);

    const url = await Url.create({
      originalUrl,
      shortCode,
    });

    res.status(201).json({
      message: "URL shortened successfully",
      data: {
        id: url._id,
        originalUrl: url.originalUrl,
        shortCode: url.shortCode,
        shortUrl: `http://localhost:5000/${url.shortCode}`,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};