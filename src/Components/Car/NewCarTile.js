import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const NewCarTile = () => {
    const fontColor= global.config.TileFontColor;
    const tileBgColor= global.config.TileBackgroundColor;
    const {t} = useTranslation();

    return (
        <div className="container text-center " >

            <div className="col " >

                    <div className={`card shadow mb-3 `}  style={{background: tileBgColor}} >
                        <div className=" text-center ">
                        <Link to="/new-car-form" style={{ textDecoration: 'none' }}>
                            <img
                                src="https://thenounproject.com/api/private/icons/54657/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
                                className="card-img-top"
                                alt="Add New Car"
                                style={{width: '100px', height: 'auto'}}
                            />
                            <h5 style={{color: fontColor}} className={`card-title `} >{t('addNewCar')}</h5>
                            <p className="card-text"></p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewCarTile;