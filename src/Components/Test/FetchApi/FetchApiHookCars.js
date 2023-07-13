import React, { useEffect, useState } from 'react';

const FetchApiHookCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch(global.config.HostFront+'/api/cars/all')
      .then(response => response.json())
      .then(data => {
        setCars(data);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        {cars.map(car => (
          <div className="col-md-4" key={car.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{`${car.brand} ${car.model}`}</h5>
                <p className="card-text">{car.plate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchApiHookCars;