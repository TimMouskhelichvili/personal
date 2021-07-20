const { getMarkdownPagesPaths } = require('./config/utils/markdown');
const { generateSiteMap } = require('./config/utils/generateSiteMap');
const { sitemapLocales, markdownPages } = require('./config/sitemap/index');
const { headers } = require('./config/headers/index');

module.exports = {
	env: {
		markdown: {
			pages: markdownPages,
			paths: getMarkdownPagesPaths(markdownPages)
		},
		sitemapLocales
	},
    i18n: {
		locales: [ 'en', 'fr' ],
		defaultLocale: 'en',
	},
	async headers() {
		return headers;
	},
    webpack: (config, { isServer }) => {
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader'
		});

        if (isServer) {
			generateSiteMap(sitemapLocales);
		}
	
		return config;
	},
	poweredByHeader: false,
	reactStrictMode: true
};