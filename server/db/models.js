// db/models.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Schema de Usuário
 * Aqui são armazenadas informações comuns e específicas para mentores e mentorados.
 */
const userSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['mentor', 'mentorado', 'admin'], required: true },
  contato: { type: String },
  fotoPerfil: { type: String },
  // Campos específicos para mentores:
  areasAtuacao: [String],
  experiencia: String,
  bio: String,
  // Campos específicos para mentorados:
  interesses: [String],
  necessidades: String,
}, { timestamps: true });

/**
 * Schema de Disponibilidade
 * Define os horários em que o mentor está disponível.
 * Você pode optar por incorporar essa informação dentro do usuário ou separá-la para maior flexibilidade.
 */
const availabilitySchema = new Schema({
  mentorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  diaSemana: { type: String, required: true }, // Ex.: "segunda-feira"
  horaInicio: { type: String, required: true }, // Formato "HH:mm"
  horaFim: { type: String, required: true },
  dataEspecifica: Date, // Opcional: para disponibilidade em data única
});

/**
 * Schema de Agendamento/Sessão
 * Armazena o agendamento entre mentor e mentorado.
 */
const appointmentSchema = new Schema({
  mentorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  mentoradoId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  dataHora: { type: Date, required: true },
  duracao: { type: Number, required: true }, // em minutos
  status: { type: String, enum: ['agendado', 'cancelado', 'reagendado', 'concluido'], default: 'agendado' },
  feedback: String,
  rating: Number,
}, { timestamps: true });

/**
 * Schema de Notificações
 * Gerencia as notificações enviadas aos usuários.
 */
const notificationSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  mensagem: { type: String, required: true },
  tipo: { type: String, enum: ['agendamento', 'lembrete', 'cancelamento'], required: true },
  lida: { type: Boolean, default: false },
  appointmentId: { type: Schema.Types.ObjectId, ref: 'Appointment' },
}, { timestamps: { createdAt: 'createdAt' } });

// Criação dos models
const User = mongoose.model('User', userSchema);
const Availability = mongoose.model('Availability', availabilitySchema);
const Appointment = mongoose.model('Appointment', appointmentSchema);
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = {
  User,
  Availability,
  Appointment,
  Notification,
};
