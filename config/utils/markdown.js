const { readdirSync, readFileSync } = require('fs');
const path = require('path');

/**
 * Returns the Markdown pages.
 */
const getMarkdownPages = () => {
	let articles = {};
	let pages = {};

	try {
		articles = getFiles(path.join(__dirname, '../../public/static/markdown/blog'), {}, 'blog/');
		pages = getFiles(path.join(__dirname, '../../public/static/markdown/pages'));
	} catch { }

	return {
		articles,
		pages
	};
};

/**
 * Returns the Markdown pages paths.
 */
const getMarkdownPagesPaths = (obj) => {
	const articles = getPaths(obj.articles);
	const pages = getPaths(obj.pages);

	return {
		articles,
		pages
	};
};

/**
 * Returns the paths.
 * @param {{}} pages 
 */
const getPaths = (pages) => {
	const hrefs = [];

	for (let i in pages) {
		for (let lang in pages[i]) {
			if (!pages[i][lang].href) continue;

			const part = lang === 'en' ? '' : `/${lang}`;

			hrefs.push(`${part}${pages[i][lang].href}`);
		}
	}

	return hrefs;
} 

/**
 * Go files.
 * @param {string} directory - The directory. 
 * @param {{}} files - The files.
 */
const getFiles = (directory, files = {}, part = '') => {
	readdirSync(directory).forEach((file) => {
        const absolute = path.join(directory, file);
		const languages = {};

		readdirSync(absolute).forEach((language) => {
			const languagePath = path.join(absolute, language);
			const obj = getSourceAndAttributes(languagePath);

			const completeLanguage = language.replace('.md', '');

			obj.href = `/${part}${file}`;

			languages[completeLanguage] = obj;
		});

		if (Object.keys(languages).length) {
			files[file] = languages;
		}
	});
	
	return files;
};

/**
 * Returns the source and attributes.
 * @param {string} languagePath - The language path. 
 */
const getSourceAndAttributes = (languagePath) => {
	let source = readFileSync(languagePath, 'utf8').trim();
	let attributes = {};

	if (source.startsWith('---')) {
		const lastIndex = source.indexOf('---', 3) + 3;
		attributes = getAttributes(source);
		source = source.substr(lastIndex).trim();
	}

	return {
		...attributes,
		source
	};
};

/**
 * Returns the attributes.
 * @param {string} source - The source. 
 */
const getAttributes = (source) => {
	const attributes = source
		.substr(0, source.indexOf('---', 3) + 3)
		.replace(/---/g, '')
		.trim()
		.split(/\r\n|\r|\n/);
	
	const obj = {};

	for (let i in attributes) {
		const index = attributes[i].indexOf(":");
		if (index === -1) continue;

		const key = attributes[i].substr(0, index).trim().replace(/ /g, '_');
		obj[key] = attributes[i].substr(index + 1).trim();
	}

	return obj;
};


module.exports = {
	getMarkdownPages,
	getMarkdownPagesPaths
};