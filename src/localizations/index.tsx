import { useSelector } from 'react-redux';
import { IState } from 'src/context/interfaces/IState';
import { frLocale } from 'src/localizations/fr';
import { enLocale } from 'src/localizations/en';
import { Locale } from 'src/types/locale';

/**
 * The locales.
 */
const locales = {
    en: enLocale,
    fr: frLocale
};

/**
 * The locale hook that returns the locales.
 */
const useLocale = (): Locale => {
    return useSelector((state: IState) => state.locale.locale);
};

export {
    useLocale,
    locales
};