import React from 'react';
import {Link} from 'react-router-dom';

const CarTile = (props) => {
    const upFontColor= global.config.TileFontColor;
    const downFontColor= global.config.DescriptionFontColor;
    const tileBgColor= global.config.TileBackgroundColor;

    return (
        <div className="col-md-4 " key={props.car.id}>
            <div className={`card shadow mb-4 ${tileBgColor}`}>
                <div className=" text-center ">
                    <Link to="/car-details" state={{carId: props.car.id}} style={{ textDecoration: 'none' }}>
                        <img src={"https://www.carlogos.org/car-logos/"+props.car.brand.toLowerCase()+"-logo.png"}
                             className="card-img-top"
                             alt="Add New Car"
                             style={{ width: '200px', height: 'auto'}}
                        />
                        <h5 className={`card-title ${upFontColor}`} >{props.car.brand} {props.car.model} </h5>
                        <h8 className={`card-title ${downFontColor}`}>VIN: {props.car.vin}</h8>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CarTile;