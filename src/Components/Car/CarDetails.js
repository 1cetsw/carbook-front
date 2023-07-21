import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import axios from "axios";
import {useTranslation} from "react-i18next";
import LastServiceWindow from "./CarDetailsComponents/LastServiceWindow";

import AddExploitationServiceWindow from "./CarDetailsComponents/AddExploitationServiceWindow";
import AddOtherFixWindow from "./CarDetailsComponents/AddOtherFixWindow";
import ShowCarHistoryWindow from "./CarDetailsComponents/ShowCarHistoryWindows";
import ExploitationStateWindow from "./CarDetailsComponents/ExploitationStateWindow";

const CarDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const carId = location.state.carId;
    const [car, setCar] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const tileBgColor = global.config.TileBackgroundColor;
    const {t} = useTranslation();
    const fontColor = global.config.TileFontColor;
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
                                <Button className="btn btn-danger me-2 " onClick={handleConfirm}>{t('deleteCar')}</Button>
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
                                </Link>) : ('')}
                        </div>
                    </div>
                </div>
                <LastServiceWindow/>
                <ExploitationStateWindow/>
                <div className="col-md-4">
                    <div className="card shadow" style={{background: tileBgColor}}>
                        <h5 style={{color: fontColor}}>{t('OCACTitle')}:</h5>

                            <div>
                                <h6 className="card-title"> OC: {car.oc} </h6>
                                <h6 className="card-title"> AC: {car.ac}</h6>
                                <h6 className="card-title"> {t('techExam')}: {car.technicalExamination}</h6>

                            </div>

                    </div>

            </div>


            <div className="row">
                <AddExploitationServiceWindow/>
                <AddOtherFixWindow/>
                <ShowCarHistoryWindow/>
            </div>
            </div>
        </div>
    )

}
export default CarDetails;