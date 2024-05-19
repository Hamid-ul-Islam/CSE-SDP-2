import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    user: {},
    comments: {
      type: [
        {
          comment: { type: String, required: true },
          replies: { type: [{ user: String, reply: String }], default: [] },
        },
      ],
      default: [],
    },
    desc: { type: String, required: true },
    language: String,
    code: String,
    likes: [],
    createdAt: {
      type: Date,
      default: new Date(),
    },
    image: String,
  },
  {
    timestamps: true,
  }
);

var PostModel = mongoose.model("Posts", postSchema);

export default PostModel;
