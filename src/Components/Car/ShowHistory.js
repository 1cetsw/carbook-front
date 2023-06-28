
import React, {useEffect, useState} from "react";
import {useLocation} from 'react-router-dom';

const ShowHistory = () => {
    const location = useLocation();
    const carId = location.state.carId;
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(global.config.HostFront + '/api/cars/car-services/' + carId)
            .then(response => response.json())
            .then(data => {
                setServices(data);
                console.log(data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, [carId]);

    return (
        <div className="container">



                <div className="col-md-3" >
                    <div className="card mb-3">

                                <h5>Repair 1</h5>

                    </div>
                </div>

            <div className="col-md-3" >
                <div className="card mb-3">

                        <h5>Repair 2</h5>

                </div>
            </div>

        </div>
    )
}

export default ShowHistory;