import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { IMarkdownArticleProps } from 'src/interfaces/IMarkdownArticleProps';
import { Articles } from 'src/componentsByPage/blog/articles';
import { Container } from 'src/components/global/container';
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
    const router = useRouter();

    const currentArticles = [];

    for (const i in props.articles) {
        const article = props.articles[i][router.locale as string];
        if (!article) continue;

        currentArticles.push(article); 
    }

    return (
        <Container>
            <Row>
                <Seo {...locale.sitemap.blog} />
                <Articles articles={currentArticles} />
            </Row>
        </Container>
    );
};

/**
 * Returns the static props.
 */
export const getStaticProps = async (): Promise<{}> => {
    let articles = process.env.markdown.pages.articles;
    if (!isProduction()) {
        const { getPages } = require('config/utils/markdown');
        articles = (getPages() as IPages).articles;
    }
	
    return {
        props: {
            articles
        }
    };
};

export default Blog;