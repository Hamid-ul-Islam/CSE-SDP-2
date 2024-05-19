import express from "express";
import {
  createComment,
  getComments,
} from "../controllers/CommentController.js";

const router = express.Router();

router.post("/", createComment);
router.get("/", getComments);

export default router;
