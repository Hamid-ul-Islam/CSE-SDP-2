import express from "express";
import { createReply, getReplies } from "../controllers/ReplyController.js";


const router = express.Router();

router.post("/", createReply);
router.get("/", getReplies);

export default router;
