const { readdirSync, statSync } = require('fs');
const path = require('path');
const sizeOf = require('image-size');

/**
 * Returns the images.
 */
const getImages = () => {
	let dirName = process.env.dirName;
	if (!dirName) {
		dirName = path.join(__dirname, '../../');
	}
	
	const files = {};
	getSizesRecursively(path.join(dirName, 'public/static/images'), files);
	getSizesRecursively(path.join(dirName, 'public/static/markdown/blog'), files);
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
		const extName = path.extname(absolute);
	
		if (statSync(absolute).isDirectory()) {
			getSizesRecursively(absolute, files);
		} else if (['.jpg', '.png', '.jpeg', '.gif' ].includes(extName)) {
			const url = absolute.substr(absolute.indexOf('/static/'));
			const imageProps = sizeOf(absolute);
			
			files[url] = {
				h: imageProps['height'],
				w: imageProps['width'],
			};
		}
	}
};

module.exports = {
	getImages
}