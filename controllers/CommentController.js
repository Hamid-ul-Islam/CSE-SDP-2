import commentModel from "../models/commentModel.js";

export const createComment = async (req, res) => {
  const newComment = new commentModel(req.body);
  try {
    const savedComment = await newComment.save();
    res.status(200).json(savedComment);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getComments = async (req, res) => {
  try {
    const comments = await commentModel.find({});
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
};
