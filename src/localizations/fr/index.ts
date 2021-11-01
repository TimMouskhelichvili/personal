import { frPortfolioLocale } from 'src/localizations/fr/portfolio';
import { frNotFoundLocale } from 'src/localizations/fr/notFound';
import { frSitemapLocale } from 'src/localizations/fr/sitemap';
import { frGlobalLocale } from 'src/localizations/fr/global';
import { frResumeLocale } from 'src/localizations/fr/resume';
import { frHomeLocale } from 'src/localizations/fr/home';
import { frBlogLocale } from 'src/localizations/fr/blog';
import { frSitemap } from 'config/sitemap/fr';
import { Locale } from 'src/types/locale';

const frLocale: Locale = {
    global: frGlobalLocale,
    pages: {
        blog: frBlogLocale,
        home: frHomeLocale,
        notFound: frNotFoundLocale,
        portfolio: frPortfolioLocale,
        resume: frResumeLocale,
        sitemap: frSitemapLocale
    },
    sitemap: frSitemap
};

export {
    frLocale
};