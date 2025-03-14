// src/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['mentor', 'mentorado', 'admin'], required: true },
  contato: String,
  fotoPerfil: String,
  areasAtuacao: [String],  // Específico para mentores
  experiencia: String,     // Específico para mentores
  bio: String,             // Específico para mentores
  interesses: [String],    // Específico para mentorados
  necessidades: String     // Específico para mentorados
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

