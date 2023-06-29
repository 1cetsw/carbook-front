import React, {useEffect, useState} from "react";
import {useLocation} from 'react-router-dom';
import { Table} from 'react-bootstrap';

const ShowHistory = () => {
    const location = useLocation();
    const carId = location.state.carId;
    const [services, setServices] = useState([]);
    const [sortColumn, setSortColumn] = useState('');
    const [sortDirection, setSortDirection] = useState({key: "date", direction: "asc"});

    //Pobieranie danych json z serwera
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


    const toggleSort = (column) => {
        if (column === sortColumn) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };



    const getSortIndicator = (column) => {
        if (column === sortColumn) {
            return sortDirection === 'asc' ? '▲' : '▼';
        } else {
            return null;
        }
    };

    //format daty na 00:00:0000
    const formatDate = (dateString) => {
        const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    };
    return (
        <div className="container">

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th onClick={() => toggleSort('course')}>
                        Course {getSortIndicator('course')}
                    </th>
                    <th onClick={() => toggleSort('date')}>
                        Date {getSortIndicator('date')}
                    </th>
                    <th>Oil Change</th>
                    <th>Air Filter Change</th>
                    <th>Cabin Filter Change</th>
                    <th>Fuel Filter Change</th>
                </tr>
                </thead>
                <tbody>
                {services.map((data) => (
                    <tr key={data.id}>

                        <td>{data.course}</td>
                        <td>{formatDate(data.date)}</td>
                        <td style={{color: data.oilChange ? 'green' : 'red'}}>{data.oilChange ? 'Yes' : 'No'}</td>
                        <td style={{color: data.airFilterChange ? 'green' : 'red'}}>{data.airFilterChange ? 'Yes' : 'No'}</td>
                        <td style={{color: data.cabinFilterChange ? 'green' : 'red'}}>{data.cabinFilterChange ? 'Yes' : 'No'}</td>
                        <td style={{color: data.fuelFilterChange ? 'green' : 'red'}}>{data.fuelFilterChange ? 'Yes' : 'No'}</td>

                    </tr>
                ))}
                </tbody>
            </Table>

        </div>
    );
};

export default ShowHistory;