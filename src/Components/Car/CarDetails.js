import React, {useEffect, useState} from "react";
import {Link, useLocation} from 'react-router-dom';
import {Alert} from 'react-bootstrap';

const CarDetails = () => {
    const location = useLocation();
    const carId = location.state.carId;
    const [car, setCar] = useState([]);
    const [lastService, setLastService] = useState(null);

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(global.config.HostFront + '/api/cars/car-exploitation-repair/' + carId);
                const data = await response.json();
                // Sortuj dane według daty w kolejności malejącej
                const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                const lastServiceData = sortedData[0];
                setLastService(lastServiceData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [carId]);

    const getAlertVariant = () => {
        if (lastService) {
            const currentDate = new Date();
            const lastServiceDate = new Date(lastService.date);
            const timeDiff = Math.abs(currentDate - lastServiceDate);
            const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

            if (daysDiff >= 365) {
                return 'danger'; // Must Service
            } else if (daysDiff >= 335) {
                return 'warning'; // Alert Service
            } else {
                return 'success'; // OK
            }
        }

        return 'secondary';
    };

    const getAlertMessage = () => {
        if (lastService) {
            const currentDate = new Date();
            const lastServiceDate = new Date(lastService.date);
            const timeDiff = Math.abs(currentDate - lastServiceDate);
            const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

            if (daysDiff >= 365) {
                return 'Must service!';
            } else if (daysDiff >= 335) {
                return 'Service is approaching!';
            } else {
                return 'OK';
            }
        }

        return 'No data';
    };

    const formatDate = (dateString) => {
        const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    };


    return (<div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className=" card shadow">
                        {car.brand && (<img
                            src={"https://www.carlogos.org/car-logos/" + car.brand.toLowerCase() + "-logo.png"}
                            className="card-img-top"
                            alt="Logo samochodu"
                            style={{width: '200px', height: 'auto'}}
                        />)}
                        <h5 className="card-title"> Brand: {car.brand} </h5>
                        <h5 className="card-title"> Model: {car.model}</h5>
                        <h5 className="card-title"> VIN: {car.vin}</h5>
                        <h5 className="card-title"> Course</h5>
                        <h5 className="card-title"> Engine </h5>
                    </div>
                </div>

                {/*Last Service Div*/}

                <div className="col-md-4">

                    <div className="card shadow">
                        <h5>LAST SERVICE:</h5>
                        {lastService && (
                            <div>
                                <h6 className="card-title"> Course: {lastService.course} km</h6>
                                <h6 className="card-title"> Data: {formatDate(lastService.date)}</h6>
                                <h6 className="card-title"> Oil Change:
                                    <h7 style={{color: lastService.oilChange ? 'green' : 'red'}}>{lastService.oilChange ? 'Yes' : 'No'}</h7>
                                </h6>
                                <h6 className="card-title"> Air FilterChange:
                                    <h7
                                        style={{color: lastService.airFilterChange ? 'green' : 'red'}}>{lastService.airFilterChange ? 'Yes' : 'No'}</h7>
                                </h6>
                                <h6 className="card-title"> Cabin Filter Change:
                                    <h7 style={{color: lastService.cabinFilterChange ? 'green' : 'red'}}> {lastService.cabinFilterChange ? 'Yes' : 'No'}</h7>
                                </h6>
                                <h6 className="card-title"> Filter Change:
                                    <h7
                                        style={{color: lastService.fuelFilterChange ? 'green' : 'red'}}> {lastService.fuelFilterChange ? 'Yes' : 'No'}</h7>
                                </h6>
                            </div>

                        )}
                        <Alert variant={getAlertVariant()}>
                            Service Status: {getAlertMessage()}
                        </Alert>
                    </div>
                </div>

                {/*Exploitation state*/}

                <div className="col-md-4">
                    <div className="card shadow">
                        <h5>EXPLOITATION STATE:</h5>
                        {car.exploitationState && (
                            <div>
                                <h6 className="card-title"> Oil Change: {car.exploitationState.lastOilChangeCourse} km/
                                    {formatDate(car.exploitationState.lastOilChangeDate)}</h6>

                                <h6 className="card-title"> Air Filter
                                    Change: {car.exploitationState.lastAirFilterChangeCourse} km/
                                    {formatDate(car.exploitationState.lastAirFilterChangeDate)}</h6>

                                <h6 className="card-title"> Fuel Filter
                                    Change: {car.exploitationState.lastFuelFilterChangeCourse} km/
                                    {formatDate(car.exploitationState.lastFuelFilterChangeDate)}</h6>

                                <h6 className="card-title"> Cabin Filter
                                    Change: {car.exploitationState.lastCabinFilterChangeCourse} km/
                                    {formatDate(car.exploitationState.lastCabinFilterChangeDate)}</h6>

                            </div>
                        )}
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="card mb-3 shadow">
                        <div className="card-body ">
                            <Link to={"/add-exploitation-service"} state={{carId: carId}}>
                                <img
                                    src="https://e7.pngegg.com/pngimages/935/194/png-clipart-car-motor-oil-motor-vehicle-service-automobile-repair-shop-car-car-motorcycle.png"
                                    className="card-img-top"
                                    alt="cos"
                                    style={{width: '200px', height: 'auto'}}
                                />
                                <h5>Add Exploitation Service</h5>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card mb-3 shadow">
                        <div className="card-body ">
                            <Link to="/add-other-fix" state={{carId: carId}}>
                                <img src="https://cdn-icons-png.flaticon.com/512/226/226537.png"
                                     className="card-img-top"
                                     alt="cos"
                                     style={{width: '200px', height: 'auto'}}
                                />
                                <h5>Add Other Fix</h5></Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card mb-3 shadow">
                        <div className="card-body ">
                            <Link to={"/car-history"} state={{carId: carId}}>
                                <img
                                    src="https://img.uxwing.com/wp-content/themes/uxwing/download/transportation-automotive/car-inspection-icon.svg"
                                    className="card-img-top"
                                    alt="cos"
                                    style={{width: '200px', height: 'auto'}}
                                />
                                <h5>Show Car Repair History</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarDetails;