#!/bin/bash

echo "🔧 Corrigindo Tailwind CSS..."

# 1️⃣ Atualizar tailwind.config.ts para garantir que todos os arquivos sejam escaneados corretamente
CONFIG_FILE="client/tailwind.config.ts"

echo "📝 Atualizando $CONFIG_FILE..."
cat > "$CONFIG_FILE" <<EOL
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./client/**/*.{js,ts,jsx,tsx,mdx}",
    "./**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background, 0, 0%, 100%))',
        foreground: 'hsl(var(--foreground, 0, 0%, 3.9%))'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
EOL

echo "✅ Arquivo $CONFIG_FILE atualizado."

# 2️⃣ Modificar globals.css para garantir que bg-background seja aplicado corretamente
GLOBAL_CSS="client/app/globals.css"

echo "📝 Atualizando $GLOBAL_CSS..."
cat > "$GLOBAL_CSS" <<EOL
:root { 
  --background: 0, 0%, 100%;
  --foreground: 0, 0%, 3.9%;
}

@tailwind base;
@tailwind components;
@tailwind utilities;

html, body {
  background-color: hsl(var(--background, 0, 0%, 100%));
}

@layer base {
  body {
    @apply bg-background text-foreground;
  }
}
EOL

echo "✅ Arquivo $GLOBAL_CSS atualizado."

# 3️⃣ Limpar dependências e reconstruir projeto
echo "🧹 Limpando cache e rebuildando o projeto..."

rm -rf node_modules .next
echo "🗑️ node_modules e .next removidos."

npm install
echo "📦 Dependências reinstaladas."

npm run dev
echo "🚀 Projeto rodando!"

echo "🎉 Correção concluída!"
