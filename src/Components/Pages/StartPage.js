import carbookLogo from '../../Assets/Images/carbook.png';
import background from '../../Assets/Images/background_new1.jpg';
import {Container} from 'react-bootstrap';
import {useTranslation} from "react-i18next";


const StartPage = () => {
    const {t} = useTranslation();
    return (
        <Container fluid className=" px-0">
            <header className="py-5 bg-image-full" style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <div className="text-center my-5">
                    <img className="img-fluid rounded-circle mb-4" src={carbookLogo} alt="carbook logo"/>
                    <h1 className="text-white fs-3 fw-bolder">{t('startPage1')}</h1>
                    <p className="text-white-50 mb-0">{t('startPage2')}<br/>
                        {t('startPage3')}
                        <br/>{t('startPage4')}</p>

                </div>
            </header>
            <footer className="py-3 bg-dark">
                <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Carbook Website
                    Team 2023</p></div>
            </footer>
        </Container>
    )
}

export default StartPage;

