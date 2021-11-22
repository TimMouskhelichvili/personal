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
		configuration.general.linkedIn
	],
	'url': configuration.general.baseUrl
});

/**
 * Returns if page is landing page.
 * @param {NextRouter} router - The router. 
 */
const isLandingPage = (router: NextRouter): boolean => {
	return router.route.indexOf('/landing/') !== -1;
}

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
const getAuthor = (author?: string) => author || configuration.general.author;

/**
 * Returns the popup.
 * From: https://stackoverflow.com/questions/4068373/center-a-popup-window-on-screen.
 * @param {string} url - The url.
 * @param {string} title - The title.
 * @param {number} w - The width.
 * @param {number} h - The height.
 */
// eslint-disable-next-line complexity
const createPopUp = (url: string, title = '', w = 700, h = 500): Window | null => {
    const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

    const width = window.innerWidth ? 
        window.innerWidth : document.documentElement.clientWidth ? 
            document.documentElement.clientWidth : screen.width;
    const height = window.innerHeight ? 
        window.innerHeight : document.documentElement.clientHeight ? 
            document.documentElement.clientHeight : screen.height;

    const systemZoom = width / window.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft;
    const top = (height - h) / 2 / systemZoom + dualScreenTop;
    const newWindow = window.open(url, title, `
		scrollbars=yes,
		width=${w / systemZoom}, 
		height=${h / systemZoom}, 
		top=${top}, 
		left=${left}
	`);

    return newWindow;
};

export {
	createPopUp,
	getStructuredData,
	isProduction,
	isLandingPage,
	getPhoneLink,
	redirectToLanguage,
	hasOnlyOneLanguage,
	getDate,
	getAuthor
};