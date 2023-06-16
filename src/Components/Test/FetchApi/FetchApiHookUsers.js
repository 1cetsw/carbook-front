import React, { useEffect, useState } from 'react';

const FetchApiHookUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch(global.config.HostFront + '/api/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {users.map(user => (
          <div className="col-md-4" key={user.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{user.username}</h5>
                <p className="card-text">{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchApiHookUsers;