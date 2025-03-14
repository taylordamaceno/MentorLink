// server/src/routes/availabilityRoutes.js
const express = require('express');
const router = express.Router();
const availabilityController = require('../controllers/availabilityController');

// Rotas para CRUD de disponibilidade
router.post('/', availabilityController.createAvailability);
router.get('/', availabilityController.getAvailabilities);
router.get('/:id', availabilityController.getAvailabilityById);
router.put('/:id', availabilityController.updateAvailability);
router.delete('/:id', availabilityController.deleteAvailability);

module.exports = router;

