import {Button} from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";


const OCACWindow = () => {

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
        <div className="col-md-4">
            <div className=" card shadow" style={{background: tileBgColor}}>
                {car.brand && (<img
                    src={"https://www.carlogos.org/car-logos/" + car.brand.toLowerCase().replace(/\s+/g, '-') + "-logo.png"}
                    className="card-img-top"
                    alt="Car Logo"
                    style={{width: '200px', height: 'auto'}}
                />)}
                <h6 className="card-title" style={{color: fontColor}}> {t('brand')}:</h6>
                <h6 className="card-subtitle">  {car.brand} </h6>
                <h6 className="card-title" style={{color: fontColor}}> {t('model')}:</h6>
                <h6 className="card-subtitle"> {car.model}</h6>
                <h6 className="card-title" style={{color: fontColor}}> VIN:</h6>
                <h6 className="card-subtitle"> {car.vin}</h6>
                <h6 className="card-title" style={{color: fontColor}}> {t('engine')}:</h6>
                <h6 className="card-subtitle">  {car.engine}</h6>
                <h6 className="card-title" style={{color: fontColor}}> {t('course')}:</h6>
                <h6 className="card-subtitle"> {car.course} km</h6>
                <h6 className="card-title" style={{color: fontColor}}> {t('plate')}:</h6>
                <h6 className="card-subtitle"> {car.plate}</h6>
                <h6 className="card-title" style={{color: fontColor}}> {t('nick')}:</h6>
                <h6 className="card-subtitle"> "{car.nickname}"</h6>

                <div>


                    {!showConfirmation ? (
                        <Button className="btn btn-danger me-2 "
                                onClick={handleConfirm}>{t('deleteCar')}</Button>
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
    )
}

export default OCACWindow;

