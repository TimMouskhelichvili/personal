import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { IMarkdownArticleProps } from 'src/interfaces/IMarkdownArticleProps';
import { Articles } from 'src/componentsByPage/blog/articles';
import { Container } from 'src/components/global/container';
import { Row } from 'src/components/elements/row';
import { Seo } from 'src/components/global/seo';
import { useLocale } from 'src/localizations';

/**
 * The Blog component. 
 */
const Blog = (): ReactElement => {
    const router = useRouter();
    const locale = useLocale();
    const articles = getArticles(router.locale as string);

    return (
        <Container>
            <Row>
                <Seo {...locale.sitemap.blog} />
                <Articles articles={articles} />
            </Row>
        </Container>
    );
};

/**
 * Returns the articles.
 * @param {string} language - The language. 
 */
const getArticles = (language: string): IMarkdownArticleProps[] => {
    const articles = process.env.markdown.pages.articles;
    const newArticles = [];

    for (const i in articles) {
        if (!articles[i][language]) continue;
		
        newArticles.push(articles[i][language]);
    }
	
    return newArticles;
};

export default Blog;