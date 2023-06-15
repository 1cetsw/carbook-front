import React, { useEffect, useState } from 'react';

const CarTiles = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(data => {
        setUsers(data.data);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container">
        <h1>Your CarBook's </h1>
      <div className="row">
        {users.map(user => (
          <div className="col-md-4" key={user.id}>
            <div className="card mb-4">
              <img src={user.avatar} className="card-img-top" alt={user.first_name} />
              <div className="card-body">
                <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
                <p className="card-text">{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarTiles;