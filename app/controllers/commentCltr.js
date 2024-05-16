const commentById = require("../models/commentModel");

const commentCltr = {};

commentCltr.post = async (req, res) => {
  const { comment } = req.body;
  const { id } = req.params;
  commentById[id] = {
    id,
    comment,
  };
  res.status(200).json(commentById);
};

commentCltr.get = async (req, res) => {
  res.json(commentById);
};

module.exports = commentCltr;
