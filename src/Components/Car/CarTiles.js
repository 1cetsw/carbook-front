import React, { useEffect, useState } from 'react';
import CarTile from './CarTile';
import NewCarTile from '../Car/NewCarTile';
import AuthService from "../../Services/Auth.service";


const CarTiles = () => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    // Fetch data from the server
    fetch(global.config.HostFront + '/api/cars/user/' + currentUser.id)
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
<NewCarTile />
      <div className="row">
        
        {cars.map((car) => <CarTile car={car} key={car.id} />)}



      </div>
    </div>
  );
};

export default CarTiles;