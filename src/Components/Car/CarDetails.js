
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

const CarDetails = () => {
    const location = useLocation();
    const carId = location.state.carId;
    const [car, setCar] = useState([]);
    var currentdate = new Date().toLocaleDateString();
    useEffect(() => {
        fetch(global.config.HostFront + '/api/cars/car/' + carId)
            .then(response => response.json())
            .then(data => {
                setCar(data);
                console.log(data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, [carId]);

    return (
        <div className="container">
      
      <div className="row">
            <div className="card shadow">
                <h5 className="card-title"> Brand: {car.brand} </h5>
                <h5 className="card-title"> Model: {car.model}</h5>
                <h5 className="card-title"> VIN: {car.vin}</h5>
                <h5 className="card-title"> Engine </h5>
            </div>


            <div className="col-md-3" >
                <div className="card mb-3 shadow">
                    <div className="card-body ">
                <a href="/last-service">
                <img src="https://icon-library.com/images/clock-png-icon/clock-png-icon-18.jpg" className="card-img-top"
                             alt="cos"/>
                    <h5>LAST SERVICE: {currentdate}</h5> 
                    </a>
                    </div>
            </div>
            </div>

          <div className="col-md-3" >
              <div className="card mb-3 shadow">
                  <div className="card-body ">
                      <a href="/addService">
                          <img src="https://e7.pngegg.com/pngimages/935/194/png-clipart-car-motor-oil-motor-vehicle-service-automobile-repair-shop-car-car-motorcycle.png" className="card-img-top"
                               alt="cos"/>
                          <h5>Exploitation service</h5></a>
                  </div>
              </div>
          </div>

          <div className="col-md-3" >
              <div className="card mb-3 shadow">
                  <div className="card-body ">
                      <a href="/add-single-fix">
                          <img src="https://cdn-icons-png.flaticon.com/512/226/226537.png" className="card-img-top"
                               alt="cos"/>
                          <h5>Add Single Fix</h5></a>
                  </div>
              </div>
          </div>

             <div className="col-md-3" >
            <div className="card mb-3 shadow">
                <div className="card-body ">
                <a href="/car-history">
                <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/transportation-automotive/car-inspection-icon.svg" className="card-img-top"
                             alt="cos"/>
                    <h5>Show Car Repair History</h5></a>
                </div>
            </div>
        </div>


        </div></div>

    )
}

export default CarDetails;