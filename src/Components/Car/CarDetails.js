
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
            <div className="card ">
                <h5 className="card-title"> Brand: {car.brand} </h5>
                <h5 className="card-title"> Model: {car.model}</h5>
                <h5 className="card-title"> VIN: {car.vin}</h5>
                <h5 className="card-title"> Engine </h5>
                
            </div>

            <div className="col-md-3" >
            <div className="card mb-3">
                <div className="card-body">
                <a href="/last-service">
                <img src="https://w7.pngwing.com/pngs/993/785/png-transparent-clock-stopwatch-clock-angle-timer-stopwatch.png" className="card-img-top"
                             alt="cos"/>
                    <h5>LAST SERVICE: {currentdate}</h5> 
                    </a>
                </div> 
            </div>
            </div>

             <div className="col-md-3" >
            <div className="card mb-3">
                <div className="card-body">
                <a href="/car-history">
                <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/transportation-automotive/car-inspection-icon.svg" className="card-img-top"
                             alt="cos"/>
                    <h5>Show Car Repair History</h5></a>
                </div>
            </div>
        </div>
        </div> </div>
    )
}

export default CarDetails;