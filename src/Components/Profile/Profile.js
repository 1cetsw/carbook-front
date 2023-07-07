import AuthService from "../../Services/Auth.service";
import React, {useState} from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Profile = () => {
    const currentUser = AuthService.getCurrentUser();



    const handleInputChange = (e) => {
        const {name, value} = e.target;

    };

    const handleSaveChanges = () => {
        // Zapisz zmienione dane użytkownika

    };

    return (
        <div className="container">
            <p>
                <strong>Id:</strong> {currentUser.id}
            </p>

            <Card style={{ width: '50%' }}>
                <Card.Body>
                    <Card.Title>User Profile</Card.Title>
                    <ListGroup variant="flush">
                        <ListGroup.Item><strong>Nick:</strong> {currentUser.username}</ListGroup.Item>
                        <ListGroup.Item><strong>Name:</strong> {currentUser.name}</ListGroup.Item>
                        <ListGroup.Item><strong>Surname:</strong> {currentUser.surname}</ListGroup.Item>
                        <ListGroup.Item><strong>Email:</strong> {currentUser.email}</ListGroup.Item>
                        <ListGroup.Item><strong>Phone:</strong> {currentUser.phone}</ListGroup.Item>
                        <ListGroup.Item><strong>Location:</strong> {currentUser.location}</ListGroup.Item>
                        <ListGroup.Item><strong>Authorities:</strong> {currentUser.roles}</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card></div>
            );


};
export default Profile;
