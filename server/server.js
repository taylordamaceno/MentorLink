// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes');
const availabilityRoutes = require('./src/routes/availabilityRoutes');
const appointmentRoutes = require('./src/routes/appointmentRoutes');
const notificationRoutes = require('./src/routes/notificationRoutes');
const errorHandler = require('./src/middlewares/errorHandler');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Conecta ao MongoDB
connectDB();

// Rotas da API
app.use('/api/users', userRoutes);
app.use('/api/availabilities', availabilityRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/notifications', notificationRoutes);

// Rota raiz para teste
app.get('/', (req, res) => {
  res.send('API MentorLink funcionando!');
});

// Middleware para tratamento de erros (sempre depois das rotas)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
