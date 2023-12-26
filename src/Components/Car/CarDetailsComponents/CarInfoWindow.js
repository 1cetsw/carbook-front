import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CarInfoWindow = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const carId = location.state.carId;
    const [car, setCar] = useState([]);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const tileBgColor = global.config.TileBackgroundColor;
    const { t } = useTranslation();
    const fontColor = global.config.TileFontColor;
    const buttonColorCancel = global.config.ButtonColorCancel;
    const buttonColorAccept = global.config.ButtonColorAccept;
    const buttonColorDelete = global.config.ButtonColorDelete;

    useEffect(() => {
        fetch(global.config.HostFront + '/api/cars/car/' + carId)
            .then((response) => response.json())
            .then((data) => {
                setCar(data);
                console.log(data);
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
            });
    }, [carId]);

    const handleConfirm = () => {
        setShowConfirmation(true);
    };

    const handleCancel = () => {
        setShowConfirmation(false);
    };

    const handleDeleteCar = () => {
        axios
            .delete(global.config.HostFront + '/api/cars/delete/' + carId)
            .then((response) => {
                console.log('Deleted successfully!');
                navigate(`/dashboard`);
            })
            .catch((error) => {
                console.error('Error deleting:', error);
            });
    };

    const renderCardItem = (label, value) => (
        <>
            <h6 className="card-title" style={{ color: fontColor }}>
                {t(label)}:
            </h6>
            <h6 className="card-subtitle">{value}</h6>
        </>
    );

    return (
        <div className="col-md-4">
            <div className=" card shadow" style={{ background: tileBgColor }}>
                {car.brand && (
                    <img
                        src={`https://www.carlogos.org/car-logos/${car.brand.toLowerCase().replace(/\s+/g, '-')}-logo.png`}
                        className="card-img-top"
                        alt="Car Logo"
                        style={{ width: '200px', height: 'auto' }}
                    />
                )}

                {renderCardItem('brand', car.brand)}
                {renderCardItem('model', car.model)}
                {renderCardItem('VIN', car.vin)}
                {renderCardItem('engine', car.engine)}
                {renderCardItem('course', `${car.course} km`)}
                {renderCardItem('plate', car.plate)}
                {renderCardItem('nick', `"${car.nickname}"`)}

                <div>
                    {!showConfirmation ? (
                        <Button className={`btn me-2 ${buttonColorDelete}`} onClick={handleConfirm}>
                            {t('deleteCar')}
                        </Button>
                    ) : (
                        <div>
                            <h5 className="card-title" style={{ color: 'darkred' }}>
                                {t('deleteQuestion')}
                            </h5>
                            <Button className={`btn me-5 ${buttonColorAccept}`} onClick={handleDeleteCar}>
                                {t('✔')}
                            </Button>
                            <Button className={`btn me-2 ${buttonColorCancel}`} onClick={handleCancel}>
                                {t('✘')}
                            </Button>
                        </div>
                    )}

                    {!showConfirmation ? (
                        <Link to={`/edit-car-info/${carId}`} state={{ carId: carId }}>
                            <Button className={`${buttonColorAccept}`}>{t('editInfo')}</Button>
                        </Link>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    );
};

export default CarInfoWindow;
