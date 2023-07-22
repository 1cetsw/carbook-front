import React, {useEffect, useState} from 'react';
import {Card, Form, Button} from 'react-bootstrap';
import axios from "axios";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const CarProfileEdit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const carId = location.state.carId;
    const {t} = useTranslation();
    const buttonColor = global.config.ButtonColor;
    const buttonTextColor = global.config.ButtonTextColor;
    const fontColor = global.config.TileFontColor;
    const formBg = global.config.FormBackgroundColor;

    const [editedData, setEditedData] = useState({
        model: '',
        engine: '',
        plate: '',
        course: '',
        nickname: '',
        oc: '',
        ac: '',
        technicalExamination: ''
    });

    const [car, setCar] = useState([]);
//pobieranie aktualnych danych
    useEffect(() => {
        fetch(global.config.HostFront + '/api/cars/car/' + carId)
            .then(response => response.json())
            .then(data => {
                setCar(data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, [carId]);
    const handleChange = (e) => {
        setEditedData({
            ...editedData,
            [e.target.name]: e.target.value,
        });
    };
//wysyłanie edytowanych na serwer
    const handleSubmit = (e) => {
        e.preventDefault();

        for (const key in editedData) {
            if (editedData[key] === '') {
                editedData.model = car.model;
            }
            if (editedData.engine === '') {
                editedData.engine = car.engine;
            }
            if (editedData.plate === '') {
                editedData.plate = car.plate;
            }
            if (editedData.course === '') {
                editedData.course = car.course;
            }
            if (editedData.nickname === '') {
                editedData.nickname = car.nickname;
            }
            if (editedData.oc === '') {
                editedData.oc = car.oc;
            }
            if (editedData.ac === '') {
                editedData.ac = car.ac;
            }
            if (editedData.technicalExamination === '') {
                editedData.technicalExamination = car.technicalExamination;
            }

        }

        axios.put(global.config.HostFront + '/api/cars/edit-car-info/' + carId, editedData)
            .then(response => {
                // Handle success
                console.log("success");
                console.log(response);
                navigate(`/car-details`, {state: {carId: carId}});
            })
            .catch(error => {
                // Handle error
                console.log(error);
            });
    };


    return (
        <Card style={{background: formBg}}>
            <h2 style={{color: fontColor}}>{t('editOCACData')}</h2>
            <Form onSubmit={handleSubmit} style={{color: fontColor}}>

                <Form.Group controlId="formOC">
                    <Form.Label> OC:
                    </Form.Label>
                    <Form.Control
                        type="date"
                        name="oc"
                        placeholder={car.oc}
                        value={editedData.oc}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formAC">
                    <Form.Label> AC:
                    </Form.Label>
                    <Form.Control
                        type="date"
                        name="ac"
                        placeholder={car.ac}
                        value={editedData.ac}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formTechnicalExamination">
                    <Form.Label> {t('technicalExamination')}:
                    </Form.Label>
                    <Form.Control
                        type="date"
                        name="technicalExamination"
                        placeholder={car.technicalExamination}
                        value={editedData.technicalExamination}
                        onChange={handleChange}
                    />
                </Form.Group>

                <br/>

                <Button variant="primary" type="submit" className={`btn me-4  ${buttonColor}`}>
                    <h6 style={{color: buttonTextColor}}>{t('save')}</h6>
                </Button>

                <Link to="/car-details" state={{carId: carId}}>
                    <Button variant="primary" className="btn btn-info">
                        <h6 style={{color: buttonTextColor}}>{t('cancel')}</h6>
                    </Button>
                </Link>
            </Form>
        </Card>
    );
};

export default CarProfileEdit;