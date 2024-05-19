//create reply

import ReplyModel from "../models/ReplyModel.js";

export const createReply = async (req, res) => {
  const newReply = new ReplyModel(req.body);

  try {
    const savedReply = await newReply.save();
    res.status(200).json(savedReply);
  } catch (error) {
    res.status(500).json(error);
  }
};

//get all reply

export const getReplies = async (req, res) => {
  try {
    let replies = await ReplyModel.find();
    replies = replies.map((reply) => {
      const { password, ...otherDetails } = reply._doc;
      return otherDetails;
    });
    res.status(200).json(replies);
  } catch (error) {
    res.status(500).json(error);
  }
};
