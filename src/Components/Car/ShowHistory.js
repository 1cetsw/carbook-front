import React from "react";
import {Link, useLocation} from 'react-router-dom';


const ShowHistory = () => {

    const location = useLocation();
    const carId = location.state.carId;

    return (
        <div className="container">
            <div className="row">
                    <div>
                    <div className="card mb-3 shadow text-center">

                        <Link to={"/exploitation-history"} state={{carId: carId}} style={{textDecoration: 'none'}}>
                            <img
                                src="https://static.thenounproject.com/png/3189885-200.png"
                                className="card-img-top"
                                alt="Show Exploitation History"
                                style={{width: '190px', height: 'auto'}}
                            />
                            <h5>Show Exploitation History</h5>
                        </Link>
                    </div>



                <div>
                    <div className="card mb-3 shadow text-center">

                        <Link to={"/other-repair-history"} state={{carId: carId}} style={{textDecoration: 'none'}}>
                            <img
                                src="https://images.ctfassets.net/33n6gwydcv8y/4ZBRStKuuscef66fBTDQEz/45850edce967544f1bcb802a50ae5ed0/inspection-history-check.png"
                                className="card-img-top"
                                alt="Show Other History"
                                style={{width: '170px', height: 'auto'}}
                            />
                            <h5>Show Other Repair History</h5>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
        </div>
    )

};

export default ShowHistory;