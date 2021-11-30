import { IMarkdownHeading } from "src/interfaces/IMarkdownHeading";

/**
 * Returns the markdown headings.
 * @param {string} source - The source.
 */
 const getMarkdownHeadings = (source: string): IMarkdownHeading[] => {
	let lines = source.split('\n');
	const headings: IMarkdownHeading[] = [];

	for (const i in lines) {
		if (!lines[i].startsWith('#')) continue;

		if (lines[i].startsWith('## ')) {
			headings.push({ 
				title: lines[i].replace('## ', ''), 
				subHeadings: []
			});
		} else if (lines[i].startsWith('### ')) {
			headings[headings.length - 1].subHeadings.push(lines[i].replace('### ', ''));
		} else if (lines[i].startsWith('#### ')) {
			headings[headings.length - 1].subHeadings.push(lines[i].replace('#### ', ''));
		} else if (lines[i].startsWith('##### ')) {
			headings[headings.length - 1].subHeadings.push(lines[i].replace('##### ', ''));
		}
	}

	return headings;
}

/**
 * Returns the id from text.
 * @param {string} text - The text. 
 */
const getIdFromText = (text: string): string => {
	let newText = text;

	if (Array.isArray(text)) {
		newText = '';
		text.forEach(x => {
			newText += x?.props?.children || x;
		});
	};

	newText = newText.replace(/[^A-Za-z\s]/gi, '').replace(/\s/g, "-").toLowerCase();
	if (newText[0] === '-') {
		newText = newText.substring(1, newText.length);
	}

	return newText;
}

/**
 * Returns the title for summary.
 * @param {string} text - The text.
 */
const getTitleForSummary = (text: string): string => {
	return text.replace(/^\d+\.\s*/, '').replace(/`/g, '');
}

export {
	getTitleForSummary,
	getIdFromText,
	getMarkdownHeadings
}