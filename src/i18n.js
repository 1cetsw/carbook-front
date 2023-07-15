import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './Common/translations/translateEN.json'; //  translate EN
import translationPL from './Common/translations/translatePL.json'; //  translate PL
import translationDE from './Common/translations/translateDE.json'; //  translate DE

// Config i18next
i18n
    .use(initReactI18next)
    .init({
        lng: 'en', // Domyślny język
        fallbackLng: 'en', // Język awaryjny, jeśli tłumaczenie dla wybranego języka nie jest dostępne
        resources: {
            en: {
                translation: translationEN,
            },
            pl: {
                translation: translationPL,
            },
            de: {
                translation: translationDE,
            },
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
