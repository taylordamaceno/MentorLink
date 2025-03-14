FROM node:16-alpine

WORKDIR /usr/src/app

# Copia os arquivos de configuração do back-end
COPY package.json package-lock.json* ./

# Instala as dependências usando npm
RUN npm install

# Copia todo o código da aplicação back-end
COPY . .

# Exponha a porta definida (geralmente 5000)
EXPOSE 5000

# Inicia a aplicação
CMD ["node", "server.js"]
