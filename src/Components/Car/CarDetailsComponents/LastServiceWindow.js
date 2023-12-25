import {Alert} from 'react-bootstrap';
import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";


const LastServiceWindow = () => {
    const { t } = useTranslation();
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
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    };

    return (
        <div className="col-md-4">
            <div className="card shadow" style={{ background: tileBgColor }}>
                <h5 style={{ color: fontColor }}>{t('lastService')}:</h5>

                {lastService && (
                    <div>
                        {renderServiceItem(t, 'course', lastService.course, 'km')}
                        {renderServiceItem(t, 'date', formatDate(lastService.date))}
                        {renderServiceItem(t, 'oilChange', lastService.oilChange, 'green', 'red')}
                        {renderServiceItem(t, 'airFilterChange', lastService.airFilterChange, 'green', 'red')}
                        {renderServiceItem(t, 'cabinFilterChange', lastService.cabinFilterChange, 'green', 'red')}
                        {renderServiceItem(t, 'fuelFilterChange', lastService.fuelFilterChange, 'green', 'red')}
                    </div>
                )}

                <Alert variant={getAlertVariant()}>
                    {t('serviceStatus')}: {getAlertMessage()}
                </Alert>
            </div>
        </div>
    );
};

const renderServiceItem = (t, itemName, value, colorIfTrue = '', colorIfFalse = '') => (
    <>
        <h6 style={{ color: global.config.TileFontColor }} className="card-title"> {t(itemName)}:</h6>
        <h6 className="card-subtitle" style={{ color: value !== null && value !== undefined && value !== "" ? colorIfTrue : colorIfFalse }}>
            {value !== null && value !== undefined && value !== "" ? '✔' : '✘'}
        </h6>
    </>
);

export default LastServiceWindow;
