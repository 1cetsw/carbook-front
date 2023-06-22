import React, {useEffect, useState} from "react";
import {useLocation} from 'react-router-dom';

const CarDetails = () => {
    const location = useLocation();
    const carId = location.state.carId;
    const [car, setCar] = useState([]);

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
        <div className="col-md-4" key={car.id}>
            <div className="card mb-4">
                <div key={car.id}>
                    <div className="card-body">
                        <img src="https://freepngimg.com/thumb/car/13-2-car-png.png" className="card-img-top"
                             alt="cos"/>
                        <h5 className="card-title">{car.brand} {car.model}</h5>
                        <p className="card-text">{car.vin}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarDetails;