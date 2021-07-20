const XmlBeautify = require('xml-beautify');
const fs = require('fs');
const { DOMParser } = require('xmldom');
const { getSitemapRoutes } = require('./sitemap');

/**
 * Generates the site map.
 * @param {{}} sitemap - The sitemap.
 */
const generateSiteMap = async (sitemap) => {
	const ENV = 'https://timmouskhelichvili.com';
	const routes = getSitemapRoutes(sitemap);

	let sitemapXML = `
		<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
			${routes.map(route => {
				let href = route.href;

				if (href[href.length - 1] === '/') {
					href = href.substring(0, href.length - 1);
				}

				return `
					<url>
						<loc>${`${ENV}${href}`}</loc>
						<priority>${route.home ? 1 : .8}</priority>
					</url>
				`;
			}).join('')}
		</urlset>
	`;

	sitemapXML = new XmlBeautify({ parser: DOMParser }).beautify(sitemapXML);

	fs.writeFileSync('public/sitemap.xml', sitemapXML);
}

module.exports = {
	generateSiteMap
};