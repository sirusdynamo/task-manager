const mongoose = require("mongoose");
const validator = require("validator");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,

  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  //   family: 4, // Use IPv4, skip trying IPv6
};
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", options);

const Task = mongoose.model("Task", {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});
