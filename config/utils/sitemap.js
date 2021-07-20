/**
 * Returns the sitemap.
 * @param {{}} sitemap - The sitemap. 
 * @param {{}} obj - The obj. 
 */
const getSitemap = (sitemap, obj = {}) => {
    for (const i in sitemap) {
        if (sitemap[i].title) {
            if (sitemap[i].href) {
                obj[i] = sitemap[i];
            }
            continue;
        }
		
        getSitemap(sitemap[i], obj);
    }
	
    return obj;
};

/**
 * Returns the sitemap routes.
 * @param {{}} sitemap - The sitemap.
 */
const getSitemapRoutes = (sitemap) => {
    let routes = [];
	
    for (const language in sitemap) {
        routes = [
			...routes,
			...getSitemapRoutesForLanguage(sitemap, language)
		]
    }
	
    return routes;
};

/**
 * Returns the sitemap routes for a language.
 * @param {{}} sitemap - The sitemap.
 * @param {string} language - The language.
 */
const getSitemapRoutesForLanguage = (sitemap, language) => {
    const routes = [];
	
    for (const i in sitemap[language]) {
		const part = language === 'en' ?  '' : `/${language}`;
		const href = part + sitemap[language][i].href;

		routes.push({
			...sitemap[language][i],
			href
		});
	}
	
    return routes;
};

module.exports = {
	getSitemap,
	getSitemapRoutes,
	getSitemapRoutesForLanguage
};