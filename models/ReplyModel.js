//reply to comment model

import mongoose from "mongoose";

const replySchema = mongoose.Schema(
  {
    commentId: { type: String, required: true },
    user: {},
    reply: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const replyModel = mongoose.model("Reply", replySchema);

export default replyModel;
