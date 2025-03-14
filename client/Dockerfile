FROM node:18-alpine

WORKDIR /usr/src/app

# Copia os arquivos de configuração do front-end
COPY package.json package-lock.json* ./

# Instala as dependências usando npm
RUN npm install

# Copia todo o código da aplicação front-end
COPY . .

# Constrói a aplicação (supondo que haja um script "build" no package.json)
RUN npm run build

# Exponha a porta do front-end (geralmente 3000 para Next.js)
EXPOSE 3000

# Inicia a aplicação
CMD ["npm", "start"]
