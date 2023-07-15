import AuthService from "../../Services/Auth.service";
import React, {useEffect, useState} from 'react';
import {Button, Card, ListGroup} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";


const Profile = (props) => {
    const currentUser = AuthService.getCurrentUser();
    const [user, setUser] = useState([]);
    const fontColor = global.config.TileFontColor;
    const formBg = global.config.FormBackgroundColor;
    const buttonColor = global.config.ButtonColor;
    const buttonTextColor = global.config.ButtonTextColor;
    const {t} = useTranslation();


    useEffect(() => {

        // Fetch data from the server
        fetch(global.config.HostFront + '/api/users/' + currentUser.id)
            .then(response => response.json())
            .then(data => {
                setUser(data);
                console.log(data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, [currentUser.id]);

    console.log(currentUser);
    return (

        <Card style={{background: formBg}}>
            <h2 style={{color: fontColor}}>{t('userProfile')}</h2>

            <ListGroup variant="flush ">
                <ListGroup.Item style={{background: formBg, color: fontColor}}><strong>{t('nick')}:</strong> {user.username}</ListGroup.Item>
                <ListGroup.Item style={{background: formBg, color: fontColor}}><strong>{t('name')}:</strong> {user.name}</ListGroup.Item>
                <ListGroup.Item style={{background: formBg, color: fontColor}}><strong>{t('surname')}:</strong> {user.surname}</ListGroup.Item>
                <ListGroup.Item style={{background: formBg, color: fontColor}}><strong>Email:</strong> {user.email}</ListGroup.Item>
                <ListGroup.Item style={{background: formBg, color: fontColor}}><strong>{t('phone')}:</strong> {user.phone}</ListGroup.Item>
                <ListGroup.Item style={{background: formBg, color: fontColor}}><strong>{t('location')}:</strong> {user.location}</ListGroup.Item>

            </ListGroup>
            <br/>
            <Button  variant="primary"  className={`btn ${buttonColor}`}>
                <Link to={"/update-profile/" + currentUser.id} style={{textDecoration: 'none'}}>
                    <h6 style={{color: buttonTextColor}}>{t('editProfileData')}</h6>
                </Link>
            </Button>

        </Card>

    );

};
export default Profile;