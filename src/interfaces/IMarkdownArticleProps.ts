import { IMarkdownHeading } from 'src/interfaces/IMarkdownHeading';

interface IMarkdownArticleProps {
	source: {
		compiledSource: string;
		source: string;
	};
	title: string;
	href: string;
	description?: string;
	date?: string;
	author?: string;
	openGraphImage?: string;
	headings: IMarkdownHeading[];
}

export type {
    IMarkdownArticleProps
};