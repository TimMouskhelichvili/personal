import { enPortfolioLocale } from 'src/localizations/en/portfolio';
import { enNotFoundLocale } from 'src/localizations/en/notFound';
import { enSitemapLocale } from 'src/localizations/en/sitemap';
import { enArticleLocale } from 'src/localizations/en/article';
import { enGlobalLocale } from 'src/localizations/en/global';
import { enResumeLocale } from 'src/localizations/en/resume';
import { enHomeLocale } from 'src/localizations/en/home';
import { enBlogLocale } from 'src/localizations/en/blog';
import { enSitemap } from 'config/sitemap/en';

const enLocale = {
    global: enGlobalLocale,
    pages: {
        article: enArticleLocale,
        blog: enBlogLocale,
        home: enHomeLocale,
        notFound: enNotFoundLocale,
        portfolio: enPortfolioLocale,
        resume: enResumeLocale,
        sitemap: enSitemapLocale
    },
    sitemap: enSitemap
};

export {
    enLocale
};