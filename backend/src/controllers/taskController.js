const taskModel = require('../models/taskModels');

const getAllController = async (_req, res) => {
  const tasks = await taskModel.getAll();
  return res.status(200).json(tasks);
};

const createTask = async (request, res) => {
  const create = await taskModel.create(request.body);
  return res.status(201).json(create);
};

module.exports = {
  getAllController,
  createTask
};