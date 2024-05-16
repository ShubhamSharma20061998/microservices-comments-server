const express = require("express");
const cors = require("cors");

const commentRouter = require("./routes/commentRouter");

const app = express();
const port = 4001;

app.use(express.json());
app.use(cors());

app.use("/post/:id/comment", commentRouter);

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
