require("./db/mongoose");
const Task = require("./models/task");
const deleteTaskAndCount = async (id, complete) => {
  const deletedTask = await Task.deleteOne({ _id: id });
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount.then((result) => {
  console.log("");
});
