import React, {useEffect, useState} from 'react';
import {Card, Form, Button} from 'react-bootstrap';
import AuthService from "../../Services/Auth.service";
import axios from "axios";

const UserProfileEdit = ({name, surname, phone, location, email}) => {
    const currentUser = AuthService.getCurrentUser();
    const [editedData, setEditedData] = useState({

        name: name,
        surname: surname,
        email: email,
        phone: phone,
        location: location,

    });


    const [user, setUser] = useState([]);

    useEffect(() => {

        // Fetch data from the server
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

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(global.config.HostFront + '/api/users/'+ currentUser.id, editedData)
            .then(response => {
                // Handle success
                console.log(response);

            })
            .catch(error => {
                // Handle error
                console.log(error);
            });
    };

    return (

        <Card style={{width: '50%'}}>
            <Card.Body>
                <p>
                    <strong>Id:</strong> {currentUser.id}
                </p>
                <Card.Title>Edit Profile Data</Card.Title>
                <Form onSubmit={handleSubmit}>

                    <Form.Group controlId="formName">
                        <Form.Label> Actual Name:
                            <div style={{color: 'green'}}> {user.name}</div>
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={editedData.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formSurname">
                        <Form.Label> Actual Surname:
                            <div style={{color: 'green'}}> {user.surname}</div>
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="surname"
                            value={editedData.surname}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                        <Form.Label> Actual Phone:
                            <div style={{color: 'green'}}> {user.phone}</div>
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            value={editedData.phone}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formLocation">
                        <Form.Label> Actual Location:
                            <div style={{color: 'green'}}> {user.location}</div>
                        </Form.Label>
                        <Form.Control
                            type="text"
                            name="location"
                            value={editedData.location}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default UserProfileEdit;