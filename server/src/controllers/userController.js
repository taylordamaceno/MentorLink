// server/src/controllers/userController.js
const { User } = require('../models');

// Criar um novo usuário
exports.createUser = async (req, res, next) => {
  try {
    // Aqui você pode adicionar validações com express-validator, por exemplo.
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

// Listar todos os usuários
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// Obter um usuário específico por ID
exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Atualizar um usuário
exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Deletar um usuário
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    return res.status(200).json({ message: 'Usuário removido com sucesso' });
  } catch (error) {
    next(error);
  }
};

