const express = require("express");
const router = express.Router();
const Todo = require("./../model/todo_model");
router.post("/list", async function (req, res) {
  var todoList = await Todo.find();
  res.json(todoList);
});
router.post("/add", async function (req, res) {
  await Todo.deleteOne({ id: req.body.id });
  const newTodo = new Todo({
    id: req.body.id,
    title: req.body.title,
    content: req.body.content,
  });
  await newTodo.save();
  const response = { message: "New Node created", status: "200" };
  res.json(response);
});
router.post("/delete", async function (req, res) {
  await Todo.deleteOne({ id: req.body.id });
  const response = { message: "Node Delete", status: "200" };
  res.json(response);
});

module.exports = router;
