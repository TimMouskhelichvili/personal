import fr from 'dayjs/locale/fr';
import dayjs, { extend, locale } from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { getAlternateLanguages } from "src/components/global/seo";
import { configuration } from "src/configuration";
import { NextRouter } from 'next/router';

/**
 * Returns if is production.
 */
const isProduction = (): boolean => process.env.NODE_ENV === 'production';

/**
 * Returns the structured data.
 */
const getStructuredData = (): string => JSON.stringify({
	'@context': 'https://schema.org',
	'@type': 'Organization',
	'contactPoint': {
		'@type': 'ContactPoint',
		'contactType': 'customer support',
		'email': configuration.general.email
	},
	'logo': `${configuration.general.baseUrl}${configuration.general.imgs.logo}`,
	'name': configuration.general.company,
	'sameAs': [
		configuration.general.github,
		configuration.general.facebook,
		configuration.general.linkedIn
	],
	'url': configuration.general.baseUrl
});

/**
 * Returns the phone link.
 */
const getPhoneLink = (): string => {
    return configuration.general.phone
        .replace('(', '')
        .replace(')', '')
        .replace('+', '')
        .replace('-', '')
        .replace(/ /g, '');
};

/**
 * If page has only one language.
 * @param {NextRouter} router - The router.
 * @param {string} locale - The locale. 
 */
const redirectToLanguage = (router: NextRouter, locale: string): void => {
	const path = hasOnlyOneLanguage(router) ? 
		'/' : router.asPath;
	
	router.push(path, path, { locale, shallow: true });
}

/**
 * If has only one language.
 * @param {NextRouter} router - The router.
 */
const hasOnlyOneLanguage = (router: NextRouter): boolean => {
	return getAlternateLanguages(router).length === 2;
}

/**
 * Returns the localized date.
 * @param {string} date - The date.
 * @param {string} language - The language.
 */
const getDate = (date?: string, language?: string): string => {
    if (!date) return '';
	
    locale(fr);
    extend(localizedFormat);
	
    return dayjs(date).locale(language as string).format('LL');
};

/**
 * Returns the author.
 * @param {string} author - The author. 
 */
const getAuthor = (author?: string) => author || 'admin';

export {
	getStructuredData,
	isProduction,
	getPhoneLink,
	redirectToLanguage,
	hasOnlyOneLanguage,
	getDate,
	getAuthor
}