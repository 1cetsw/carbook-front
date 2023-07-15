import React from 'react';
import CarTiles from '../Car/CarTiles';
import {useTranslation} from "react-i18next";


const Dashboard = () => {
    const {t} = useTranslation();
    return (
        <div>
    <CarTiles/>

        </div>

)
    ;

}

export default Dashboard;
