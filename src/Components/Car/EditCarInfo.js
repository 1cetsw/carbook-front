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
    const buttonColorCancel = global.config.ButtonColorCancel;
    const buttonColorAccept = global.config.ButtonColorAccept;
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
            <h2 style={{color: fontColor}}>{t('editCarData')}</h2>
            <Form onSubmit={handleSubmit} style={{color: fontColor}}>

                <Form.Group controlId="formModel">
                    <Form.Label> {t('model')}:
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="model"
                        placeholder={car.model}
                        value={editedData.model}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="formEngine">
                    <Form.Label> {t('engine')}:
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="engine"
                        placeholder={car.engine}
                        value={editedData.engine}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formPlate">
                    <Form.Label> {t('plate')}:
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="plate"
                        placeholder={car.plate}
                        value={editedData.plate}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formCourse">
                    <Form.Label> {t('course')}:
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="course"
                        placeholder={car.course}
                        value={editedData.course}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formNickname">
                    <Form.Label> {t('nick')}:
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="nickname"
                        placeholder={car.nickname}
                        value={editedData.nickname}
                        onChange={handleChange}
                    />
                </Form.Group>

                <br/>

                <Button variant="primary" type="submit" className={`${buttonColorAccept} me-4 `}>
                    <h6 style={{color: buttonTextColor}}>{t('save')}</h6>
                </Button>

                <Link to="/car-details" state={{carId: carId}}>
                    <Button variant="primary" className={`me-4  ${buttonColorCancel}`}>
                        <h6 style={{color: buttonTextColor}}>{t('cancel')}</h6>
                    </Button>
                </Link>
            </Form>
        </Card>
    );
};

export default CarProfileEdit;