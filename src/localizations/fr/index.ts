import { frNotFoundLocale } from 'src/localizations/fr/notFound';
import { frSitemapLocale } from 'src/localizations/fr/sitemap';
import { frGlobalLocale } from 'src/localizations/fr/global';
import { frHomeLocale } from 'src/localizations/fr/home';
import { frMenuTop } from 'src/localizations/fr/menus';
import { enLocale } from 'src/localizations/en';
import { frSitemap } from 'config/sitemap/fr';

const frLocale: typeof enLocale = {
    global: frGlobalLocale,
    menu: frMenuTop,
    pages: {
        home: frHomeLocale,
        notFound: frNotFoundLocale,
        sitemap: frSitemapLocale
    },
    sitemap: frSitemap
};

export {
    frLocale
};