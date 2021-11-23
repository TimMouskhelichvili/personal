import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { serialize } from 'next-mdx-remote/serialize';
import { IMarkdownArticleProps } from 'src/interfaces/IMarkdownArticleProps';
import { MarkdownContainer } from 'src/components/global/markdownContainer';
import { Container } from 'src/components/global/container';
import { IStaticProps } from 'src/interfaces/IStaticProps';
import { getMarkdownHeadings } from 'src/utils/markdown';
import { Row } from 'src/components/elements/row';
import { IPages } from 'src/interfaces/IPages';
import { isProduction } from 'src/utils';

interface IArticleProps {
	articles: {
		[key in string]: IMarkdownArticleProps;
	};
	name: string;
	redirectLanguageToIndex: boolean;
}

/**
 * The Article component.
 * @param {IArticleProps} props - The props.
 */
const Article = (props: IArticleProps): ReactElement => {
    const router = useRouter();
    const article = props.articles?.[router.locale as string];

    return (
        <Container redirectLanguageToIndex={props.redirectLanguageToIndex}>
            <Row>
                <MarkdownContainer {...article} />
            </Row>
        </Container>
    );
};

/**
 * Returns the static paths.
 */
export const getStaticPaths = (): {} => {
    return {
        fallback: false,  
        paths: process.env.markdown.paths.articles
    };
};

/**
 * Returns the  static props.
 * @param {IStaticProps} context - The context. 
 */
export const getStaticProps = async (context: IStaticProps): Promise<{}> => {
    let allArticles = process.env.markdown.pages.articles;
    if (!isProduction()) {
        const { getPages } = require('config/utils/markdown');
        allArticles = (getPages() as IPages).articles;
    }

    const articles = allArticles[context.params.name];

    if (!articles?.[context.locale]) {
        return {
            notFound: true
        };
    }

    for (const i in articles) {
        articles[i].headings = getMarkdownHeadings(articles[i].source);
        articles[i].source = await serialize(articles[i].source);
    }

    return {
        props: {
            articles,
            name: context.params.name,
            redirectLanguageToIndex: Object.keys(articles).length === 1
        }
    };
};

export default Article;