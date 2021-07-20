import { enNotFoundLocale } from 'src/localizations/en/notFound';
import { enSitemapLocale } from 'src/localizations/en/sitemap';
import { enGlobalLocale } from 'src/localizations/en/global';
import { enHomeLocale } from 'src/localizations/en/home';
import { enSitemap } from 'config/sitemap/en';

const enLocale = {
    global: enGlobalLocale,
    pages: {
        home: enHomeLocale,
        notFound: enNotFoundLocale,
        sitemap: enSitemapLocale
    },
    sitemap: enSitemap
};

export {
    enLocale
};