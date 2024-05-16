const express = require("express");
const commentCltr = require("../app/controllers/commentCltr");

const commentRouter = express.Router();

commentRouter.post("/", commentCltr.post);

commentRouter.get("/", commentCltr.get);

module.exports = commentRouter;
