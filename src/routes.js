const express = require('express');
const routes = express.Router();

const AtaController = require('./controllers/AtaController');
const UserController = require('./controllers/UserController');

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

routes.get('/atas', AtaController.index);
routes.get('/atas/:id', AtaController.show);
routes.post('/atas', AtaController.store);
routes.put('/atas/:id', AtaController.update);
routes.delete('/atas/:id', AtaController.destroy);

module.exports = routes;
