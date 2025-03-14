// server/src/controllers/availabilityController.js
const { Availability } = require('../models');

// Criar um novo horário de disponibilidade
exports.createAvailability = async (req, res, next) => {
  try {
    const availability = await Availability.create(req.body);
    return res.status(201).json(availability);
  } catch (error) {
    next(error);
  }
};

// Listar todas as disponibilidades
exports.getAvailabilities = async (req, res, next) => {
  try {
    const availabilities = await Availability.find();
    return res.status(200).json(availabilities);
  } catch (error) {
    next(error);
  }
};

// Obter uma disponibilidade por ID
exports.getAvailabilityById = async (req, res, next) => {
  try {
    const availability = await Availability.findById(req.params.id);
    if (!availability) return res.status(404).json({ message: 'Disponibilidade não encontrada' });
    return res.status(200).json(availability);
  } catch (error) {
    next(error);
  }
};

// Atualizar disponibilidade
exports.updateAvailability = async (req, res, next) => {
  try {
    const availability = await Availability.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!availability) return res.status(404).json({ message: 'Disponibilidade não encontrada' });
    return res.status(200).json(availability);
  } catch (error) {
    next(error);
  }
};

// Deletar disponibilidade
exports.deleteAvailability = async (req, res, next) => {
  try {
    const availability = await Availability.findByIdAndDelete(req.params.id);
    if (!availability) return res.status(404).json({ message: 'Disponibilidade não encontrada' });
    return res.status(200).json({ message: 'Disponibilidade removida com sucesso' });
  } catch (error) {
    next(error);
  }
};
