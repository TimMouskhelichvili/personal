import { enLocale } from 'src/localizations/en';
import { locales } from 'src/localizations';

interface IStoreInitialLocaleState {
	language: keyof typeof locales;
	locale: typeof enLocale;
}

export type {
    IStoreInitialLocaleState
};