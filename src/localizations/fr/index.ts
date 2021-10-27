import { frNotFoundLocale } from 'src/localizations/fr/notFound';
import { frSitemapLocale } from 'src/localizations/fr/sitemap';
import { frGlobalLocale } from 'src/localizations/fr/global';
import { frResumeLocale } from 'src/localizations/fr/resume';
import { frHomeLocale } from 'src/localizations/fr/home';
import { frBlogLocale } from 'src/localizations/fr/blog';
import { enLocale } from 'src/localizations/en';
import { frSitemap } from 'config/sitemap/fr';

const frLocale: typeof enLocale = {
    global: frGlobalLocale,
    pages: {
        blog: frBlogLocale,
        home: frHomeLocale,
        notFound: frNotFoundLocale,
        resume: frResumeLocale,
        sitemap: frSitemapLocale
    },
    sitemap: frSitemap
};

export {
    frLocale
};