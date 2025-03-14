#!/bin/bash
set -e

# Verifique se a URL do repositório remoto foi passada como parâmetro
if [ -z "$1" ]; then
  echo "Uso: $0 <git_repo_url>"
  exit 1
fi

REMOTE_URL="$1"

echo "Removendo pastas auxiliares que não precisam ser versionadas..."
rm -rf MentorLink.git MentorLink.git.bfg-report

echo "Removendo repositório Git antigo, se existir..."
rm -rf .git

echo "Inicializando novo repositório Git..."
git init

echo "Atualizando .gitignore para ignorar node_modules em qualquer lugar..."
# Acrescenta a linha se não existir
if ! grep -qF "**/node_modules/" .gitignore 2>/dev/null; then
  echo "**/node_modules/" >> .gitignore
fi

echo "Adicionando todos os arquivos..."
git add .

echo "Fazendo commit inicial..."
git commit -m "Initial commit with all project files"

echo "Adicionando repositório remoto..."
git remote add origin "$REMOTE_URL"

echo "Fazendo push para o repositório remoto..."
git push -u origin main

echo "Processo concluído!"

