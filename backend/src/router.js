const express = require('express');

const taskController = require ('./controllers/taskController');

const router = express.Router();

router.get('/task', taskController.getAllController);

router.post('/task', taskController.createTask);

module.exports = router;