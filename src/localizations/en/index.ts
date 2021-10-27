import { enNotFoundLocale } from 'src/localizations/en/notFound';
import { enSitemapLocale } from 'src/localizations/en/sitemap';
import { enGlobalLocale } from 'src/localizations/en/global';
import { enResumeLocale } from 'src/localizations/en/resume';
import { enHomeLocale } from 'src/localizations/en/home';
import { enBlogLocale } from 'src/localizations/en/blog';
import { enSitemap } from 'config/sitemap/en';

const enLocale = {
    global: enGlobalLocale,
    pages: {
        blog: enBlogLocale,
        home: enHomeLocale,
        notFound: enNotFoundLocale,
        resume: enResumeLocale,
        sitemap: enSitemapLocale
    },
    sitemap: enSitemap
};

export {
    enLocale
};