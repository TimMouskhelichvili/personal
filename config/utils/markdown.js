const { readdirSync, readFileSync, statSync } = require('fs');
const path = require('path');

/**
 * Returns the Markdown pages.
 */
const getMarkdownPages = () => {
	let dirName = process.env.dirName;
	if (!dirName) {
		dirName = path.join(__dirname, '../../');
	}

	let articles = {};
	let pages = {};

	try {
		articles = getFiles(path.join(dirName, 'public/static/markdown/blog'), {}, 'blog/');
	} catch { }

	try {
		pages = getFiles(path.join(dirName, 'public/static/markdown/pages'));
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
		const languages = getLanguagesMarkdown(absolute, { part, file });

		if (Object.keys(languages).length) {
			files[file] = languages;
		}
	});
	
	return files;
};

/**
 * Returns the languages markdown.
 * @param {string} absolute - The path.
 */
const getLanguagesMarkdown = (absolute, { part = '', file = '', withSource = false }) => {
	const languages = {};

	readdirSync(absolute).forEach((language) => {
		if (language.indexOf('.md') === -1) return;

		const languagePath = path.join(absolute, language);
		const obj = getMarkdownObject(languagePath, withSource);

		const completeLanguage = language.replace('.md', '');

		obj.href = `/${part}${file}`;

		languages[completeLanguage] = obj;
	});

	return languages;
};

/**
 * Returns the object.
 * @param {string} languagePath - The language path. 
 */
const getMarkdownObject = (languagePath, withSource = false) => {
	let source = getSource(languagePath);
	let attributes = {};

	if (source.startsWith('---')) {
		const lastIndex = source.indexOf('---', 3) + 3;
		attributes = getAttributes(source);
		source = source.substr(lastIndex).trim();
	}

	if (withSource) {
		attributes.source = source;
	}

	attributes.dateModified = statSync(languagePath).mtime.toISOString();

	return attributes;
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

/**
 * Returns the source.
 * @param {string} languagePath - The languagePath.
 */
const getSource = (languagePath) => {
	let source = readFileSync(languagePath, 'utf8').trim();

	let name = languagePath.substring(0, languagePath.lastIndexOf('/'));
	name = name.substring(name.lastIndexOf('/') + 1);

	const path = `/static/markdown/blog/${name}/images`;
	source = source.replace(/\(\.\/images/g, '(' + path);
	source = source.replace(/openGraphImage: \.\/images/g, 'openGraphImage: ' + path);
	source = source.replace(/openGraphImage:\.\/images/g, 'openGraphImage: ' + path);

	return source;
}

module.exports = {
	getLanguagesMarkdown,
	getMarkdownPages,
	getMarkdownPagesPaths
};