const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = new Task({ title, description, user: req.user.id });
    await task.save();
    res.status(201).json(task);
  } catch (error) { res.status(500).json({ message: 'Server Error' }); }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (error) { res.status(500).json({ message: 'Server Error' }); }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task || task.user.toString() !== req.user.id) return res.status(404).json({ message: 'Task not found or not authorized' });
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    await task.save();
    res.json(task);
  } catch (error) { res.status(500).json({ message: 'Server Error' }); }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    if (task.user.toString() !== req.user.id && req.user.role !== 'admin') return res.status(401).json({ message: 'Not authorized' });
    await task.deleteOne();
    res.json({ message: 'Task removed' });
  } catch (error) { res.status(500).json({ message: 'Server Error' }); }
};