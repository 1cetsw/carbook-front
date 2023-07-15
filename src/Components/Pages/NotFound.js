import background from '../../Assets/Images/background_new1.jpg'
import {useTranslation} from "react-i18next";

const NotFound = () => {
    const {t} = useTranslation();
    return (
        <div>

            <div className="py-5 bg-image-full" style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>

                <div className="row justify-content-center">
                    <div className="col-md-12 text-center text-warning">
                        <span className="display-1 d-block">404</span>
                        <div className="mb-4 lead">{t('pageNoFound')}</div>
                        <a href="/" class="btn btn-primary">{t('backToHome')}</a>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default NotFound