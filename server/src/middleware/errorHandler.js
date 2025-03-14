// server/src/middlewares/errorHandler.js
const errorHandler = (err, req, res, next) => {
  // Imprime o erro no console para facilitar o debug
  console.error(err.stack);
  // Retorna uma resposta com status 500 e uma mensagem de erro
  res.status(500).json({ message: err.message || 'Erro interno do servidor' });
};

module.exports = errorHandler;

