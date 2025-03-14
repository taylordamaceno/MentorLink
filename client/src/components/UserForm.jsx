import { useState, useEffect } from 'react';
import { createUser, updateUser } from '../services/api';

function UserForm({ userToEdit, onSuccess }) {
  const [userData, setUserData] = useState({
    nome: '',
    email: '',
    password: '',
    role: 'mentorado'
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userToEdit) {
      setUserData(userToEdit);
    }
  }, [userToEdit]);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let result;
      if (userToEdit) {
        result = await updateUser(userToEdit._id, userData);
      } else {
        result = await createUser(userData);
      }
      onSuccess(result);
      setUserData({ nome: '', email: '', password: '', role: 'mentorado' });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={userData.nome}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={userData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Senha"
        value={userData.password}
        onChange={handleChange}
      />
      <select name="role" value={userData.role} onChange={handleChange}>
        <option value="mentor">Mentor</option>
        <option value="mentorado">Mentorado</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">{userToEdit ? 'Atualizar' : 'Criar'} Usuário</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default UserForm;
