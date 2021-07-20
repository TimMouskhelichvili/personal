const { getMarkdownPages } = require('../utils/markdown');
const { getSitemap } = require('../utils/sitemap');
const { frSitemap } = require('../sitemap/fr');
const { enSitemap } = require('../sitemap/en');

/**
 * The markdown pages.
 */
const markdownPages = getMarkdownPages();

/**
 * The sitemap locales.
 */
const sitemapLocales = (() => {
    const obj = {
        en: getSitemap(enSitemap),
        fr: getSitemap(frSitemap)
    };
	
    for (const i in markdownPages) {
        for (const article in markdownPages[i]) {
            for (const lang in markdownPages[i][article]) {
                const localeArticle = { 
                    ...markdownPages[i][article][lang]
                };				
                delete localeArticle.source;
				
                if (!localeArticle.href) continue;
				
                obj[lang][article] = localeArticle;
            }
        }
    }

    return obj;
})();

module.exports = {
    sitemapLocales,
    markdownPages
};