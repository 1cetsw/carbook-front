
const CarTile = (props) => {
    return (
        <div className="col-md-4" key={props.car.id}>
            <div className="card mb-4">
            <div key={props.car.id} >
                <div className="card-body">
                <p><a href="/new-car-form">
                <img src="https://freepngimg.com/thumb/car/13-2-car-png.png" className="card-img-top"  alt="cos" 
                />
                    <h5 className="card-title" >{props.car.brand} {props.car.model}</h5>
                    <p className="card-text">{props.car.vin}</p> 
                    </a></p></div>
            </div>
        </div>
        </div>
    )
}

export default CarTile;