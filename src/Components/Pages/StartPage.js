import carbookLogo from '../../Assets/Images/carbook.png';
import background from '../../Assets/Images/background_new.jpg'

import React, { Component } from 'react';

class StartPage extends Component {

    render() {
        return (

            <div>

                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <a class="navbar-brand" href='/test'>CarBook</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                                class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="/about/">About</a></li>
                                <li class="nav-item"><a class="nav-link" href="/contact/">Contact</a></li>
                                <li class="nav-item"><a class="nav-link" href="/search">Search</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <header class="py-5 bg-image-full" style={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>

                    <div class="text-center my-5">
                        <img class="img-fluid rounded-circle mb-4" src={carbookLogo} alt="..." />
                        <h1 class="text-white fs-3 fw-bolder">All your vehicles in one place</h1>
                        <p class="text-white-50 mb-0">Do you also not remember when you changed the oil,<br />
                            timing belt or air filter in your car? <br />Soon you won't have to, we'll do it for you.</p>
                    </div>
                </header>
                <footer class="py-5 bg-dark">
                    <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Carbook Website Team 2023</p></div>
                </footer>





            </div>


        )
    }
}
export default StartPage;

