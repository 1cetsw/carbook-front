import React from 'react';
import { useTranslation } from 'react-i18next';

import plFlagLogo from '../Assets/Images/Icons/pl.png';
import enFlagLogo from '../Assets/Images/Icons/en.png';
import deFlagLogo from '../Assets/Images/Icons/de.png';
import {Button} from "react-bootstrap";

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div   className='flags-to-right '  >
            <Button  style={{background: "none",border:"none"}}  onClick={() => changeLanguage('en')}>
                <img className=" logo-flag" src={enFlagLogo} alt="English" />
            </Button>
            <Button style={{background: "none",border:"none"}} onClick={() => changeLanguage('pl')}>
                <img className="logo-flag" src={plFlagLogo} alt="Polish" />
            </Button>
            <Button style={{background: "none", border:"none"}} onClick={() => changeLanguage('de')}>
                <img className=" logo-flag" src={deFlagLogo} alt="German" />
            </Button>
        </div>
    );
};

export default LanguageSelector;