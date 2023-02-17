const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const dbStr =
  "mongodb+srv://jayisampelliwar:Jay112233@cluster1.6g97czu.mongodb.net/testDB";
mongoose.connect(dbStr).then(function () {
  app.get("/", function (req, res) {
    res.send("My API");
  });
  const newRouter = require("./router/routes");
  app.use("/home", newRouter);
});

const port = process.env.Port || 3000;
app.listen(port, function () {
  console.log("Server is running on port " + port);
});
