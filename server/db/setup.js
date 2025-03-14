// db/setup.js
const mongoose = require('mongoose');
const { User, Availability, Appointment, Notification } = require('./models');

// Configure a URI do MongoDB. Você pode usar variáveis de ambiente para isso.
const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mentorlink';

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('Conectado ao MongoDB.');

  // Opcional: Criar índices ou inserir dados iniciais
  // Exemplo: await User.create({ ... });

  // Após a configuração, feche a conexão ou mantenha-a aberta conforme a necessidade da aplicação
  await mongoose.disconnect();
  console.log('Estrutura do banco de dados configurada com sucesso.');
})
.catch((err) => {
  console.error('Erro na conexão com o MongoDB:', err);
});

