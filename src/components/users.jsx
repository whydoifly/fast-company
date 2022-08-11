import React, { useState } from 'react';
import api from '../api';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return 'человек тусанет';
    if ([2, 3, 4].indexOf(lastOne) >= 0) return 'человека тусанут';
    return 'человек тусанет';
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };

  return (
    <>
      <h2>
      <span className={'badge bg-' + (users.length > 0 ? 'primary' : 'danger')}>
          {users.length > 0 ? `${users.length} ${renderPhrase(users.length)} с тобой сегодня` : 'Никто с тобой не тусанет'}
      </span>
      </h2>
      {users.length > 0 && (
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Имя</th>
              <th scope='col'>Качества</th>
              <th scope='col'>Профессия</th>
              <th scope='col'>Встретился, раз</th>
              <th scope='col'>Оценка</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <>
                  <tr>
                    <td>{user.name}</td>
                    <td>
                      {user.qualities.map((quality) => {
                        return (
                          <span className={`badge bg-${quality.color} m-1`}>
                            {quality.name}
                          </span>
                        );
                      })}
                    </td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate}</td>
                    <td>
                      <button
                        className='btn btn-danger'
                        onClick={() => handleDelete(user._id)}>
                        Удалить
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
