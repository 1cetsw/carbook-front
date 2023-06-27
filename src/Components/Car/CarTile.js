import React from 'react';
import {Link} from 'react-router-dom';

const CarTile = (props) => {
    return (
        <div className="col-md-4" key={props.car.id}>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <Link to="/car-details" state={{carId: props.car.id}}>
                        <img src={"https://www.carlogos.org/car-logos/"+props.car.brand.toLowerCase()+"-logo.png"}
                             className="card-img-top"
                             alt="cos"
                             // style={{ width: '200px', height: 'auto' }}
                        />
                        <h5 className="card-title">{props.car.brand} {props.car.model}</h5>
                        <p className="card-text">{props.car.vin}</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CarTile;