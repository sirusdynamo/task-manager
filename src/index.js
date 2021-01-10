const express = require("express");
require("./db/mongoose");
const taskRouter = require("./routers/taskRouter");
const userRouter = require("./routers/userRouter");

const Task = require("./models/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(taskRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
