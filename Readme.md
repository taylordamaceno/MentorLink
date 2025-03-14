
MentorLink

MentorLink é uma plataforma de mentoria microsaas que conecta mentores e mentorados, oferecendo funcionalidades de agendamento, gerenciamento de sessões e compartilhamento de conhecimento. O objetivo é facilitar o relacionamento entre profissionais experientes e quem deseja receber orientação de forma organizada e acessível.

Índice

Visão Geral

Funcionalidades Principais

Demonstração

Tecnologias Utilizadas

Instalação e Execução

Fluxo de Desenvolvimento (Microsaas)

Como Contribuir



---

Visão Geral

MentorLink surgiu da necessidade de facilitar o contato e o acompanhamento entre mentores e mentorados, potencializando o aprendizado e a troca de experiências. A plataforma oferece recursos como:

Cadastro de perfis de mentores e mentorados

Definição de disponibilidade por parte dos mentores

Agendamento de sessões

Notificações e lembretes

Configuração de preferências e áreas de interesse


O objetivo é criar um ecossistema simples e amigável, promovendo a colaboração e o crescimento profissional.


---

Funcionalidades Principais

1. Autenticação

Login e cadastro para usuários (mentores e mentorados).

Perfis com informações como áreas de atuação, experiência, interesses.



2. Gestão de Disponibilidade

Mentores definem horários disponíveis.

Mentorados visualizam e selecionam os horários dos mentores.



3. Agendamento de Sessões

Mentorados solicitam agendamentos.

Mentores confirmam (ou reagem) a agendamentos.



4. Notificações e Lembretes

Alertas por e-mail ou notificação interna.

Lembretes próximos às sessões marcadas.



5. Dashboard / Painel de Controle

Visualizar estatísticas de sessões.

Gerenciar compromissos e acompanhar progresso.





---

Demonstração

Acesse a demo ou protótipo em:
https://v0-mentorship-platform-tawny.vercel.app/dashboard

> Observação: Esta é uma versão inicial que demonstra a ideia e o layout. Algumas funcionalidades podem estar simuladas (mock) ou em fase de desenvolvimento.




---

Tecnologias Utilizadas

Front-end:

Next.js (React)

Tailwind CSS

Radix UI (para componentes acessíveis)

React Hook Form + Zod (para formulários e validação)


Back-end:

Node.js + Express (ou outro framework de sua escolha)

MongoDB (usando Mongoose) ou outro banco de dados

JWT (opcional) para autenticação


Docker e Docker Compose (para containerizar e orquestrar a aplicação)


> Nota: Os detalhes exatos dependem das configurações do seu repositório e do Dockerfile.




---

Instalação e Execução

Pré-requisitos:

Node.js LTS (recomendado 18+)

Docker (caso vá usar o docker-compose)


Passos para rodar localmente (sem Docker):

1. Clone o projeto

git clone https://github.com/usuario/mentorlink.git


2. Instale as dependências do front-end

cd mentorlink/client
npm install


3. Inicie o front-end (modo desenvolvimento)

npm run dev

Abra http://localhost:3000 para ver o projeto no navegador.


4. (Opcional) Inicie o back-end

cd ../server
npm install
npm run dev

Acesse http://localhost:5000 para ver as rotas da API.



Usando Docker Compose:

1. Na raiz do projeto, rode:

docker-compose up --build


2. A aplicação estará disponível em http://localhost:3000 (front-end) e http://localhost:5000 (back-end).




---

Fluxo de Desenvolvimento (Microsaas)

A ideia de microsaas é manter cada parte bem definida e independente. A evolução ocorre em pequenos incrementos:

1. MVP Inicial:

Cadastro e login

Definição de disponibilidade (mentores)

Agendamento (mentorados)



2. Feedback e Ajuste:

Notificações básicas

Reagendamento e cancelamento

Melhorias de UX



3. Funcionalidades Avançadas:

Dashboard administrativo

Integração com Google Calendar

Avaliação e histórico de sessões




Cada etapa é testada individualmente, mantendo o escopo reduzido para fácil implantação e manutenção.


---

Como Contribuir

1. Faça um Fork do repositório


2. Crie uma branch para sua feature ou correção:

git checkout -b feature/minha-feature


3. Faça commit das suas alterações e publique no seu fork:

git add .
git commit -m "Implementa nova feature de X"
git push origin feature/minha-feature


4. Abra um Pull Request descrevendo suas mudanças



Se tiver dúvidas ou sugestões, abra uma Issue ou entre em contato!

Mantido por seu-nome/a-organização.

