import React from 'react';
import {Link} from 'react-router-dom';

const CarTile = (props) => {
    const upFontColor= global.config.TileFontColor;
    const downFontColor= global.config.DescriptionFontColor;
    const tileBgColor= global.config.TileBackgroundColor;

    function setDescription() {
        const nickname = props.car.nickname;
        const plate = props.car.plate;
        return nickname === null || nickname.trim() === "" ? plate === null || plate.trim() === "" ? `` :
            `Plate number: ${plate}` : `Nickname: ${nickname}`;
    }

    return (
        <div className="col" key={props.car.id}>

            <div className={`card shadow mb-md-0 `} style={{background: tileBgColor}}>
                <div className=" text-center ">
                    <Link to="/car-details" state={{carId: props.car.id}} style={{ textDecoration: 'none' }}>
                        <img src={"https://www.carlogos.org/car-logos/"+props.car.brand.toLowerCase().replace(/\s+/g, '-')+"-logo.png"}
                             className="card-img-top"
                             alt="Add New Car"
                             style={{ width: '200px', height: 'auto'}}
                        />
                        <h5 style={{color: upFontColor}}  className={`card-title `} >{props.car.brand} {props.car.model} </h5>
                        <h6 style={{color: downFontColor}} className={`card-title `}>{setDescription()}</h6>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CarTile;