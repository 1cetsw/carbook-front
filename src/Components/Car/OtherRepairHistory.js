import React, {useEffect, useState} from "react";
import {useLocation} from 'react-router-dom';
import {Table, Accordion, Card} from 'react-bootstrap';

const ShowHistory = () => {
    const [expandedRow, setExpandedRow] = useState(null);
    const location = useLocation();
    const carId = location.state.carId;
    const [otherServices, setOtherServices] = useState([]);
    const [sortColumn, setSortColumn] = useState('');
    const [sortDirection, setSortDirection] = useState({key: "date", direction: "asc"});
    const fontColor= global.config.TileFontColor;

    //Pobieranie danych json z serwera dla other service
    useEffect(() => {
        fetch(global.config.HostFront + '/api/cars/car-other-repair/' + carId)
            .then(response => response.json())
            .then(data => {
                setOtherServices(data);
                console.log(data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, [carId]);

    const handleRowClick = (id) => {
        if (expandedRow === id) {
            setExpandedRow(null);
        } else {
            setExpandedRow(id);
        }
    };

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

            <h2 style={{color: fontColor}}> Other Repair </h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th onClick={() => toggleSort('course')}>
                        Course [ km ] {getSortIndicator('course')}
                    </th>
                    <th onClick={() => toggleSort('date')}>
                        Date {getSortIndicator('date')}
                    </th>
                    <th>Category</th>

                </tr>
                </thead>
                <tbody>
                {otherServices.map((data) => (
                    <React.Fragment key={data.description}>
                        <tr key={data.id} onClick={() => handleRowClick(data.description)}>

                            <td>{data.course}</td>
                            <td>{formatDate(data.date)}</td>
                            <td>{data.category}</td>

                        </tr>
                        {expandedRow === data.description && (
                            <tr>
                                <td colSpan="5">
                                    <Accordion>
                                        <Card>
                                            <h4>Description: </h4>
                                            {data.description}
                                        </Card>
                                    </Accordion>
                                </td>
                            </tr>
                        )}
                    </React.Fragment>
                ))}
                </tbody>
            </Table>

        </div>
    );
};
export default ShowHistory;