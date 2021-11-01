import { locales } from 'src/localizations';
import { Locale } from 'src/types/locale';

interface IStoreInitialLocaleState {
	language: keyof typeof locales;
	locale: Locale;
}

export type {
    IStoreInitialLocaleState
};