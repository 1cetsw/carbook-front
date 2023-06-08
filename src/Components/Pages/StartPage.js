import carbookLogo from '../../Assets/Images/carbook.png';
import background from '../../Assets/Images/background_new.jpg'

import React, { Component } from 'react';

class StartPage extends Component {

    render() {
        return (

            <div>

                <header className="py-5 bg-image-full" style={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>

                    <div className="text-center my-5">
                        <img className="img-fluid rounded-circle mb-4" src={carbookLogo} alt="carbook logo" />
                        <h1 className="text-white fs-3 fw-bolder">All your vehicles in one place</h1>
                        <p className="text-white-50 mb-0">Do you also not remember when you changed the oil,<br />
                            timing belt or air filter in your car? <br />Soon you won't have to, we'll do it for you.</p>
                    </div>
                </header>
                <footer className="py-5 bg-dark">
                    <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Carbook Website Team 2023</p></div>
                </footer>
            </div>
        )
    }
}
export default StartPage;

