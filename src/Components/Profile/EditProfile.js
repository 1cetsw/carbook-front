import React, {useEffect, useState} from 'react';
import {Card, Form, Button} from 'react-bootstrap';
import AuthService from "../../Services/Auth.service";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import trim from "validator/es/lib/trim";

const UserProfileEdit = ({name, surname, phone, email, location}) => {
    const currentUser = AuthService.getCurrentUser();
    const navigate = useNavigate();

    const [editedData, setEditedData] = useState({
        name: name,
        surname: surname,
        phone: phone,
        location: location,
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
    }, []);
    const handleChange = (e) => {
        setEditedData({
            ...editedData,
            [e.target.name]: e.target.value,
        });
    };
//wysyłanie edytowanych na serwer
    const handleSubmit = (e) => {
        e.preventDefault();

        // if (editedData.name.trim()=== '') {
        //     editedData.name = user.name;
        // }
        // if (editedData.surname.trim() === '') {
        //     editedData.surname = user.surname;
        // }
        // if (editedData.phone.trim() === '') {
        //     editedData.phone = user.phone;
        // }
        //
        // if (editedData.location.trim() === '') {
        //     editedData.location = user.location;
        // }

        axios.put(global.config.HostFront + '/api/users/' + currentUser.id, editedData)
            .then(response => {
                // Handle success

                console.log(response);
                navigate(`/profile`, {state: {currentUser: currentUser.id}});
            })
            .catch(error => {
                // Handle error
                console.log(error);
            });
    };

    return (
        <Card style={{width: '50%'}}>
            <Card.Body>
                <Card.Title>Edit Profile Data</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>  Name:
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
                        <Form.Label> Surname:
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
                        <Form.Label>  Phone:
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
                        <Form.Label> Location:
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="location"
                            placeholder={user.location}
                            value={editedData.location}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                    <Link to="/profile">
                        <Button variant="primary"  >
                    Cancel
                </Button> </Link>

                </Form>
            </Card.Body>
        </Card>
    );
};

export default UserProfileEdit;