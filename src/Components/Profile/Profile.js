import AuthService from "../../Services/Auth.service";
import React, {useEffect, useState} from 'react';
import {Card, ListGroup, Table} from 'react-bootstrap';
import {Link} from "react-router-dom";

const Profile = (props) => {
    const currentUser = AuthService.getCurrentUser();
    const [user, setUser] = useState([]);

    useEffect(() => {
        const currentUser = AuthService.getCurrentUser();
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

    return (
        <div className="container">
            <p>
                <strong>Id:</strong> {currentUser.id}
            </p>

            <button variant="primary">
                <Link to={"/edit-profile"} state={{currentUser}} style={{textDecoration: 'none'}}>

                    <h5>Edit Profile Data</h5>
                </Link>
            </button>

            <Card style={{width: '50%'}}>
                <Card.Body>
                    <Card.Title>User Profile</Card.Title>
                    <ListGroup variant="flush">

                        <ListGroup.Item><strong>Nick:</strong> {user.username}</ListGroup.Item>
                        <ListGroup.Item><strong>Name:</strong> {user.name}</ListGroup.Item>
                        <ListGroup.Item><strong>Surname:</strong> {user.surname}</ListGroup.Item>
                        <ListGroup.Item><strong>Email:</strong> {user.email}</ListGroup.Item>
                        <ListGroup.Item><strong>Phone:</strong> {user.phone}</ListGroup.Item>
                        <ListGroup.Item><strong>Location:</strong> {user.location}</ListGroup.Item>
                        <ListGroup.Item><strong>Authorities:</strong> {currentUser.roles}</ListGroup.Item>

                    </ListGroup>

                </Card.Body>
            </Card>


        </div>


    );


};
export default Profile;
