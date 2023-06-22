import React from "react";

const NewCarTile = () => {
    return (
        <div className="col-md-4">
            <div className="card mb-4">
                <div className="card-body">
                    <a href="/new-car-form">
                        <img
                            src="https://thenounproject.com/api/private/icons/54657/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
                            className="card-img-top" alt="cos"
                        />
                        <h5 className="card-title">Add New Car</h5>
                        <p className="card-text"></p>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default NewCarTile;