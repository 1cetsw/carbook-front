const CarTile = (props) => {
    return (
        <div className="col-md-4" key={props.car.id}>
            <div className="card mb-4">

                <div className="card-body">
                    <h5 className="card-title">{props.car.brand} {props.car.model}</h5>
                    <p className="card-text">{props.car.vin}</p>
                </div>
            </div>
        </div>
    )
}

export default CarTile;