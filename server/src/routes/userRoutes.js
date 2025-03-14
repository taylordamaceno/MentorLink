// server/src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para criar um usuário
router.post('/', userController.createUser);

// Rota para listar todos os usuários
router.get('/', userController.getUsers);

// Rota para obter um usuário pelo ID
router.get('/:id', userController.getUserById);

// Rota para atualizar um usuário
router.put('/:id', userController.updateUser);

// Rota para deletar um usuário
router.delete('/:id', userController.deleteUser);

module.exports = router;

