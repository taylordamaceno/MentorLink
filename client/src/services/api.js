const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Função para obter usuários
export const getUsers = async () => {
  const response = await fetch(`${API_BASE_URL}/users`);
  if (!response.ok) {
    throw new Error('Erro ao carregar usuários');
  }
  return response.json();
};

// Função para criar um usuário
export const createUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  if (!response.ok) {
    throw new Error('Erro ao criar usuário');
  }
  return response.json();
};

// Função para atualizar um usuário
export const updateUser = async (id, userData) => {
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  if (!response.ok) {
    throw new Error('Erro ao atualizar usuário');
  }
  return response.json();
};

// Função para deletar um usuário
export const deleteUser = async (id) => {
  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    throw new Error('Erro ao remover usuário');
  }
  return response.json();
};

// Função para realizar login
export const loginUser = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  if (!response.ok) {
    throw new Error('Erro ao fazer login');
  }
  return response.json();
};
