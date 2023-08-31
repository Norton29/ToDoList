const express = require('express');

const taskController = require ('./controllers/taskController');

const taskMiddleware = require('./middlewares/taskMiddleware');

const router = express.Router();

router.get('/task', taskController.getAllController);

router.get('/task/:id', taskController.getById);

router.post('/task', taskMiddleware.validateBody,  taskController.createTask);

router.delete('/task/:id', taskController.deleteTask);

router.put('/task/:id',taskMiddleware.validateBody, taskController.updateTask);

module.exports = router;