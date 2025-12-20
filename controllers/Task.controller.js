const taskModel = require("../models/task.model");

const createTasks = async (req, res) => {
  const { title, description, status, priority } = req.body;
  try {
    if (!title || !description || !status || !priority) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newTasks = new taskModel({ title, description, status, priority });
    await newTasks.save();
    res.status(201).json({ message: "New task added" });
  } catch (err) {
    res.status(500).json({ message: "Tasks not added" });
  }
};
module.exports = createTasks;
