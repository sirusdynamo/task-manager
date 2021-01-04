const express = require("express");
require("./db/mongoose");
const User = require("./models/user.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.post("/users", async (req, res) => {
  try {
    const user = await new User(req.body);
    user.save();
    res.send(user);
  } catch {
    res.send("testing");
    console.error(" Error in file");
  }
});

app.listen(port, () => {
  console.log("Server running at port" + port);
});
