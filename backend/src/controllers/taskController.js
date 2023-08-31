const taskModel = require('../models/taskModels');

const getAllController = async (_req, res) => {
  const tasks = await taskModel.getAll();
  return res.status(200).json(tasks);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const tasks = await taskModel.getById(id);
  return res.status(200).json(tasks);
};

const createTask = async (request, res) => {
  const create = await taskModel.create(request.body);
  return res.status(201).json(create);
};

const deleteTask = async (req, res) =>{
  const { id } = req.params;
  await taskModel.deleteTask(id);
  return res.status(204).json();
};

const updateTask = async (req, res) =>{
  const { id } = req.params;
  await taskModel.updateTask(id, req.body);
  const update = await taskModel.getById(id);
  return res.status(200).json(update);
};

module.exports = {
  getAllController,
  createTask,
  deleteTask,
  updateTask,
  getById
};