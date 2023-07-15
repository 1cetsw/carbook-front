import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {Alert, Button} from 'react-bootstrap';
import axios from "axios";
import {useTranslation} from "react-i18next";


const CarDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const carId = location.state.carId;
    const [car, setCar] = useState([]);
    const [lastService, setLastService] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const fontColor = global.config.TileFontColor;
    const tileBgColor = global.config.TileBackgroundColor;
    const {t} = useTranslation();

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
    const handleConfirm = () => {
        setShowConfirmation(true);


    };
    const handleCancel = () => {
        setShowConfirmation(false);
    };
    const handleDelete = () => {
        // Send the delete request
        axios.delete(global.config.HostFront + '/api/cars/delete/' + carId)
            .then(response => {
                // Handle success, e.g., show a success message or update the UI
                console.log('Deleted successfully!');
                navigate(`/dashboard`);
            })
            .catch(error => {
                // Handle error, e.g., show an error message or handle the error appropriately
                console.error('Error deleting:', error);
            });
    };
    return (
        <div className="container ">
            <div className="row ">
                <div className="col-md-4">
                    <div className=" card shadow" style={{background: tileBgColor}}>
                        {car.brand && (<img
                            src={"https://www.carlogos.org/car-logos/" + car.brand.toLowerCase().replace(/\s+/g, '-') + "-logo.png"}
                            className="card-img-top"
                            alt="Car Logo"
                            style={{width: '200px', height: 'auto'}}
                        />)}
                        <h6 className="card-title"> {t('brand')}: {car.brand} </h6>
                        <h6 className="card-title"> {t('model')}: {car.model}</h6>
                        <h6 className="card-title"> VIN: {car.vin}</h6>
                        <h6 className="card-title"> {t('engine')}: {car.engine}</h6>
                        <h6 className="card-title"> {t('course')}: {car.course} km</h6>
                        <h6 className="card-title"> {t('plate')}: {car.plate}</h6>
                        <h6 className="card-title"> {t('nick')}: "{car.nickname}"</h6>
                        <div>
                            {!showConfirmation ? (
                                <Button className="btn btn-danger me-2 " onClick={handleConfirm}>{t('delete')}</Button>
                            ) : (
                                <div>
                                    <p>{t('deleteQuestion')}</p>
                                    <Button className="btn btn-danger me-5" onClick={handleDelete}>{t('yes')}</Button>
                                    <Button className="btn btn-success " onClick={handleCancel}>{t('no')}</Button>
                                </div>
                            )}
                            {!showConfirmation ? (
                            <Link to={"/edit-car-info/" + carId} state={{carId: carId}}>
                                <Button className="btn btn-info">
                                    {t('editInfo')}
                                </Button>
                            </Link>):( '')}
                        </div>
                    </div>
                </div>

                {/*Last Service Div*/}
                <div className="col-md-4">
                    <div className="card shadow" style={{background: tileBgColor}}>
                        <h5 style={{color: fontColor}}>{t('lastService')}:</h5>
                        {lastService && (
                            <div>
                                <h6 className="card-title"> {t('course')}: {lastService.course} km</h6>
                                <h6 className="card-title"> {t('date')}: {formatDate(lastService.date)}</h6>
                                <h6 className="card-title"> {t('oilChange')}:
                                    <h6 style={{color: lastService.oilChange ? 'green' : 'red'}}>{lastService.oilChange ? 'Yes' : 'No'}</h6>
                                </h6>
                                <h6 className="card-title"> {t('airFilterChange')}:
                                    <h6
                                        style={{color: lastService.airFilterChange ? 'green' : 'red'}}>{lastService.airFilterChange ? 'Yes' : 'No'}</h6>
                                </h6>
                                <h6 className="card-title"> {t('cabinFilterChange')}:
                                    <h6 style={{color: lastService.cabinFilterChange ? 'green' : 'red'}}> {lastService.cabinFilterChange ? 'Yes' : 'No'}</h6>
                                </h6>
                                <h6 className="card-title"> {t('fuelFilterChange')}:
                                    <h6
                                        style={{color: lastService.fuelFilterChange ? 'green' : 'red'}}> {lastService.fuelFilterChange ? 'Yes' : 'No'}</h6>
                                </h6>
                            </div>

                        )}
                        <Alert variant={getAlertVariant()}>
                            {t('serviceStatus')}: {getAlertMessage()}
                        </Alert>
                    </div>
                </div>

                {/*Exploitation state*/}
                <div className="col-md-4">
                    <div className="card shadow" style={{background: tileBgColor}}>
                        <h5 style={{color: fontColor}}>{t('exploitationService')}:</h5>
                        {car.exploitationState && (
                            <div>
                                <h6 className="card-title"> {t('oilChange')}: {car.exploitationState.lastOilChangeCourse} km/
                                    {formatDate(car.exploitationState.lastOilChangeDate)}</h6>
                                <h6 className="card-title"> {t('airFilterChange')}: {car.exploitationState.lastAirFilterChangeCourse} km/
                                    {formatDate(car.exploitationState.lastAirFilterChangeDate)}</h6>
                                <h6 className="card-title"> {t('fuelFilterChange')}: {car.exploitationState.lastFuelFilterChangeCourse} km/
                                    {formatDate(car.exploitationState.lastFuelFilterChangeDate)}</h6>
                                <h6 className="card-title"> {t('cabinFilterChange')}: {car.exploitationState.lastCabinFilterChangeCourse} km/
                                    {formatDate(car.exploitationState.lastCabinFilterChangeDate)}</h6>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="card mb-3 shadow text-center" style={{background: tileBgColor}}>

                        <Link to={"/add-exploitation-service"} state={{carId: carId}}
                              style={{textDecoration: 'none'}}>
                            <img
                                src="https://faithfulltire.com/wp-content/uploads/2023/04/oil-changes-02-300x300.png"
                                className="card-img-top"
                                alt="Add Exploitation Service"
                                style={{width: '163px', height: 'auto'}}
                            />
                            <h5 style={{color: fontColor}}>{t('addExploitationState')}</h5>
                        </Link>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-3 shadow text-center" style={{background: tileBgColor}}>

                        <Link to="/add-other-fix" state={{carId: carId}} style={{textDecoration: 'none'}}>
                            <img src="https://cdn-icons-png.flaticon.com/512/226/226537.png"
                                 className="card-img-top"
                                 alt="Add Other Fix"
                                 style={{width: '160px', height: 'auto'}}
                            />
                            <h5 style={{color: fontColor}}>{t('addOtherFix')}</h5></Link>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-3 shadow text-center" style={{background: tileBgColor}}>
                        <Link to={"/car-history"} state={{carId: carId}} style={{textDecoration: 'none'}}>
                            <img
                                src="https://cdn0.iconfinder.com/data/icons/car-service-35/64/Service-history-report-gear-car-512.png"
                                className="card-img-top"
                                alt="Show Car Repair History"
                                style={{width: '160px', height: 'auto'}}
                            />
                            <h5 style={{color: fontColor}}>{t('showHistory')}</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CarDetails;