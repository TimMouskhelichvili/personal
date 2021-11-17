const { readdirSync, statSync } = require('fs');
const path = require('path');
const sizeOf = require('image-size');

/**
 * Returns the images.
 */
const getImages = () => {
	let dirName = process.env.markdown?.dirName;
	if (!dirName) {
		dirName = path.join(__dirname, '../../');
	}
	
	const files = {};
	getSizesRecursively(path.join(dirName, 'public/static/images'), files);
	return files;
}

/**
 * Returns the sizes recursively.
 * @param {string} directory - The directory. 
 * @param {[]} files - The files.
 */
const getSizesRecursively = (directory, files) => {
	const filesInDirectory = readdirSync(directory);

	for (const file of filesInDirectory) {
		const absolute = path.join(directory, file);
		if (statSync(absolute).isDirectory()) {
			getSizesRecursively(absolute, files);
		} else if (!absolute.endsWith('.webp') && !absolute.endsWith('.svg')) {
			const url = absolute.substr(absolute.indexOf('/static/images'));
			files[url] = sizeOf(absolute);
		}
	}
};

module.exports = {
	getImages,
}