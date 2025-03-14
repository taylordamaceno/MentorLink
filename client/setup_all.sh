#!/bin/bash
# setup_all.sh
# Este script configura a estrutura essencial do projeto MentorLink:
# - Cria ou atualiza o package.json do back-end (server) e front-end (client) com as dependências necessárias.
# - Cria os Dockerfiles para server e client (usando Node 16 para o back-end e Node 18 para o front-end).
# - Cria o arquivo .env.local para o front-end.
# - Cria o docker-compose.yml para orquestrar os serviços (mongo, server, client).
# - Cria o arquivo client/jsconfig.json para configuração de alias.
# - Cria um arquivo dummy em client/lib/utils.ts para evitar erros de módulos ausentes.
#
# Execute este script na raiz do projeto (onde as pastas server e client residem).

set -e

echo "Verificando e criando estrutura de diretórios..."
mkdir -p server
mkdir -p client

#####################################
# Configuração do Back-End (server) #
#####################################

# Cria o package.json na pasta server, se não existir
if [ ! -f server/package.json ]; then
  echo "Criando server/package.json..."
  cat > server/package.json << 'EOF'
{
  "name": "mentorlink-backend",
  "version": "1.0.0",
  "description": "Backend for MentorLink application",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "mongoose": "^6.8.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}
EOF
else
  echo "server/package.json já existe. Pulando criação..."
fi

# Cria o Dockerfile para o back-end (server)
echo "Criando server/Dockerfile..."
cat > server/Dockerfile << 'EOF'
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
EOF

#####################################
# Configuração do Front-End (client)#
#####################################

# Cria ou atualiza o package.json na pasta client com as dependências necessárias
echo "Criando/atualizando client/package.json..."
cat > client/package.json << 'EOF'
{
  "name": "mentorlink-frontend",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "recharts": "latest",
    "next-themes": "latest",
    "@radix-ui/react-avatar": "latest",
    "class-variance-authority": "latest",
    "@radix-ui/react-slot": "latest"
  }
}
EOF

# Cria o Dockerfile para o front-end (client) usando Node 18
echo "Criando client/Dockerfile..."
cat > client/Dockerfile << 'EOF'
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
EOF

# Cria o arquivo .env.local para o front-end
echo "Criando client/.env.local..."
cat > client/.env.local << 'EOF'
NEXT_PUBLIC_API_URL=http://localhost:5000/api
EOF

#############################
# Criação do docker-compose #
#############################

echo "Criando docker-compose.yml na raiz do projeto..."
cat > docker-compose.yml << 'EOF'
version: "3.8"
services:
  mongo:
    image: mongo:latest
    container_name: mentorlink-mongo
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

  server:
    build: ./server
    container_name: mentorlink-server
    ports:
      - "5000:5000"
    environment:
      - MONGODB_URI=mongodb://mongo:27017/mentorlink
      - PORT=5000
    depends_on:
      - mongo

  client:
    build: ./client
    container_name: mentorlink-client
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://localhost:5000/api
    depends_on:
      - server

volumes:
  mongo_data:
EOF

#####################################
# Configuração de alias para o client #
#####################################

echo "Criando client/jsconfig.json para configuração de alias..."
cat > client/jsconfig.json << 'EOF'
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["components/*"],
      "@/lib/*": ["lib/*"]
    }
  }
}
EOF

#####################################
# Criar arquivos dummy para dependências ausentes #
#####################################

# Cria a pasta client/lib se não existir
mkdir -p client/lib

# Cria um arquivo dummy para client/lib/utils.ts se não existir
if [ ! -f client/lib/utils.ts ]; then
  echo "Criando client/lib/utils.ts..."
  cat > client/lib/utils.ts << 'EOF'
export const dummyUtil = () => "dummy";
EOF
else
  echo "client/lib/utils.ts já existe. Pulando criação..."
fi

echo "Setup completo! Para construir e iniciar os containers, execute:"
echo "  docker-compose up --build --no-cache"
