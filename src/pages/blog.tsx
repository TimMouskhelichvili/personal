import React, { ReactElement } from 'react';
import { IMarkdownArticleProps } from 'src/interfaces/IMarkdownArticleProps';
import { Articles } from 'src/componentsByPage/blog/articles';
import { Container } from 'src/components/global/container';
import { IStaticProps } from 'src/interfaces/IStaticProps';
import { Row } from 'src/components/elements/row';
import { Seo } from 'src/components/global/seo';
import { IPages } from 'src/interfaces/IPages';
import { useLocale } from 'src/localizations';
import { isProduction } from 'src/utils';

interface IBlogParams {
	articles: IMarkdownArticleProps[];
}
/**
 * The Blog component. 
 * @param {IBlogParams} props - The props.
 */
const Blog = (props: IBlogParams): ReactElement => {
    const locale = useLocale();

    return (
        <Container>
            <Row>
                <Seo {...locale.sitemap.blog} />
                <Articles articles={props.articles} />
            </Row>
        </Container>
    );
};

/**
 * Returns the static props.
 * @param {IStaticProps} context - The context. 
 */
export const getStaticProps = async (context: IStaticProps): Promise<{}> => {
    let articles = process.env.markdown.pages.articles;
    if (!isProduction()) {
        const { getPages } = require('config/utils/markdown');
        articles = (getPages() as IPages).articles;
    }
	
    let newArticles = [];

    for (const i in articles) {
        if (!articles[i][context.locale]) continue;
		
        newArticles.push(articles[i][context.locale]);
    }

    newArticles = newArticles.sort((a, b) => {
        return Date.parse(b['date']) - Date.parse(a['date']);
    });
	
    return {
        props: {
            articles: newArticles
        }
    };
};

export default Blog;