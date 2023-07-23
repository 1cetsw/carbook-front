import React, {useEffect, useState} from 'react';
import {Card, Form, Button} from 'react-bootstrap';
import AuthService from "../../Services/Auth.service";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";


const UserProfileEdit = () => {
    const currentUser = AuthService.getCurrentUser();
    const navigate = useNavigate();
    const buttonColorAccept = global.config.ButtonColorAccept;
    const buttonColorCancel = global.config.ButtonColorCancel;
    const buttonTextColor = global.config.ButtonTextColor;
    const fontColor = global.config.TileFontColor;
    const formBg = global.config.FormBackgroundColor;
    const {t} = useTranslation();
    const [editedData, setEditedData] = useState({
        name: '',
        surname: '',
        phone: '',
        location: '',
    });

    const [user, setUser] = useState([]);
//pobieranie aktualnych danych
    useEffect(() => {
        fetch(global.config.HostFront + '/api/users/' + currentUser.id)
            .then(response => response.json())
            .then(data => {
                setUser(data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, [currentUser.id]);
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
                editedData.name = user.name;
            }
            if (editedData.surname === '') {
                editedData.surname = user.surname;
            }
            if (editedData.phone === '') {
                editedData.phone = user.phone;
            }
            if (editedData.location === '') {
                editedData.location = user.location;
            }
        }

        axios.put(global.config.HostFront + '/api/users/' + currentUser.id, editedData)
            .then(response => {
                // Handle success
                console.log('success');
                console.log(response);
                navigate(`/profile`, {state: {currentUser: currentUser.id}});
            })
            .catch(error => {
                // Handle error
                console.log(error);
            });
    };


    return (
        <Card style={{background: formBg}}>
            <h2 style={{color: fontColor}}>{t('editProfileData')}</h2>
            <Form onSubmit={handleSubmit} style={{color: fontColor}}>
                <Form.Group controlId="formName" >
                    <Form.Label> {t('name')}:
                    </Form.Label>

                    <Form.Control
                        type="text"
                        name="name"
                        placeholder={user.name}
                        value={editedData.name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formSurname">
                    <Form.Label> {t('surname')}:
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="surname"
                        placeholder={user.surname}
                        value={editedData.surname}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formPhone">
                    <Form.Label> {t('phone')}:
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="phone"
                        placeholder={user.phone}
                        value={editedData.phone}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formLocation">
                    <Form.Label> {t('location')}:
                    </Form.Label>
                    <Form.Control
                        type="text"
                        name="location"
                        placeholder={user.location}
                        value={editedData.location}
                        onChange={handleChange}
                    />
                </Form.Group>
                <br/>

                <Button  variant="primary" type="submit" className={`btn me-4  ${buttonColorAccept}`}>
                    <h6 style={{color: buttonTextColor}}>{t('save')}</h6>
                </Button>

                <Link to="/profile">
                    <Button  variant="primary" className={`btn   ${buttonColorCancel}`}>
                        <h6 style={{color: buttonTextColor}}>{t('cancel')}</h6>
                    </Button>
                </Link>
            </Form>
        </Card>
    );
};

export default UserProfileEdit;