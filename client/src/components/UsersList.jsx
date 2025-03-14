import { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/api';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Usuários</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.nome} - {user.email}
            <button onClick={() => handleDelete(user._id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
