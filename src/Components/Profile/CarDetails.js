import React, {useEffect, useState} from "react";
import {useLocation} from 'react-router-dom';

const CarDetails = () => {
    const location = useLocation();
    const { carId }=location.state;
    console.log("Car id from location: ", carId);
    const [car, setCar] = useState([]);

    useEffect(() => {
        // Fetch data from the server
        fetch(global.config.HostFront + '/api/cars/car/' + carId)
            .then(response => response.json())
            .then(data => {
                setCar(data);
                console.log(data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="col-md-4" key={carId}>
            <div className="card mb-4">
                <div key={car.id} >
                    <div className="card-body">
                        <p>
                            <img src="https://freepngimg.com/thumb/car/13-2-car-png.png" className="card-img-top"  alt="cos"/>
                            <h5 className="card-title" >{car.brand} {car.model}</h5>
                            <p className="card-text">{car.vin}</p>
                        </p></div>
                </div>
            </div>
        </div>
    )
}

export default CarDetails;