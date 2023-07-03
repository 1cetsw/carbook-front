import carbookLogo from '../../Assets/Images/carbook.png';
import background from '../../Assets/Images/background_new.jpg'


const StartPage = () => {

    
        return (

            <div
                className="hero-wrap"
                style={{ backgroundImage: 'url("images/bg_1.jpg")' }}
                data-stellar-background-ratio="0.5"
            >
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text justify-content-start align-items-center">
                        <div className="col-lg-6 col-md-6 ftco-animate d-flex align-items-end">
                            <div className="text">
                                <h1 className="mb-4">
                                    Now <span>It's easy for you</span> <span>rent a car</span>
                                </h1>
                                <p style={{ fontSize: 18 }}>
                                    A small river named Duden flows by their place and supplies it with
                                    the necessary regelialia. It is a paradisematic country, in which
                                    roasted parts
                                </p>
                                <a
                                    href="https://vimeo.com/45830194"
                                    className="icon-wrap popup-vimeo d-flex align-items-center mt-4"
                                >
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="ion-ios-play" />
                                    </div>
                                    <div className="heading-title ml-5">
                                        <span>Easy steps for renting a car</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 col" />
                        <div className="col-lg-4 col-md-6 mt-0 mt-md-5 d-flex">
                            <form action="#" className="request-form ftco-animate">
                                <h2>Make your trip</h2>
                                <div className="form-group">
                                    <label htmlFor="" className="label">
                                        Pick-up location
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="City, Airport, Station, etc"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="label">
                                        Drop-off location
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="City, Airport, Station, etc"
                                    />
                                </div>
                                <div className="d-flex">
                                    <div className="form-group mr-2">
                                        <label htmlFor="" className="label">
                                            Pick-up date
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="book_pick_date"
                                            placeholder="Date"
                                        />
                                    </div>
                                    <div className="form-group ml-2">
                                        <label htmlFor="" className="label">
                                            Drop-off date
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="book_off_date"
                                            placeholder="Date"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="" className="label">
                                        Pick-up time
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="time_pick"
                                        placeholder="Time"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="submit"
                                        defaultValue="Search Vehicle"
                                        className="btn btn-primary py-3 px-4"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default StartPage;

