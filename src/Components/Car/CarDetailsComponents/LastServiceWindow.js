import {Alert} from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";


const LastServiceWindow = () => {
    const {t} = useTranslation();
    const [lastService, setLastService] = useState(null);
    const fontColor = global.config.TileFontColor;
    const tileBgColor = global.config.TileBackgroundColor;

    const location = useLocation();
    const carId = location.state.carId;

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


    return (

        <div className="col-md-4">
            <div className="card shadow" style={{background: tileBgColor}}>
                <h5 style={{color: fontColor}}>{t('lastService')}:</h5>
                {lastService && (
                    <div>
                        <h6 style={{color: fontColor}} className="card-title"> {t('course')}:</h6>
                        <h6 className="card-subtitle"> {lastService.course} km</h6>
                        <h6 style={{color: fontColor}} className="card-title"> {t('date')}:</h6>
                        <h6 className="card-subtitle"> {formatDate(lastService.date)}</h6>
                        <h6 style={{color: fontColor}} className="card-title"> {t('oilChange')}:</h6>
                        <h6 className="card-subtitle"
                            style={{color: lastService.oilChange ? 'green' : 'red'}}>{lastService.oilChange ? '✔' : '✘'}</h6>

                        <h6 style={{color: fontColor}} className="card-title"> {t('airFilterChange')}:</h6>
                        <h6 className="card-subtitle"
                            style={{color: lastService.airFilterChange ? 'green' : 'red'}}>{lastService.airFilterChange ? '✔' : '✘'}</h6>

                        <h6 style={{color: fontColor}} className="card-title"> {t('cabinFilterChange')}:</h6>
                        <h6 className="card-subtitle"
                            style={{color: lastService.cabinFilterChange ? 'green' : 'red'}}> {lastService.cabinFilterChange ? '✔' : '✘'}</h6>

                        <h6 style={{color: fontColor}} className="card-title"> {t('fuelFilterChange')}:</h6>
                        <h6 className="card-subtitle"
                            style={{color: lastService.fuelFilterChange ? 'green' : 'red'}}> {lastService.fuelFilterChange ? '✔' : '✘'}</h6>

                    </div>

                )}
                <Alert variant={getAlertVariant()}>
                    {t('serviceStatus')}: {getAlertMessage()}
                </Alert>
            </div>
        </div>
    )
}

export default LastServiceWindow;

