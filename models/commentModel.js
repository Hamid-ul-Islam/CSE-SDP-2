//comment model

import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    fullName: { type: String, required: true },
    postId: { type: String, required: true },
    comment: { type: String, required: true },
    replies: { type: [{ user: String, reply: String }], default: [] },
  },
  {
    timestamps: true,
  }
);

const commentModel = mongoose.model("Comment", commentSchema);

export default commentModel;
