import React, { useEffect, useState } from 'react';
import CarTile from './CarTile';
import NewCarTile from './NewCarTile';
import AuthService from "../../Services/Auth.service";


const FetchApiHookCars = () => {
  const currentUser = AuthService.getCurrentUser();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    fetch(global.config.HostFront + '/api/cars/' + currentUser.id)
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
      
        {cars.map((car) => <CarTile car={car}  />)}
   
          <NewCarTile />
        
      </div>
    </div>
  );
};

export default FetchApiHookCars;