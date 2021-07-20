import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { StyledMetaData, StyledTitle } from './style';
import { IMarkdownArticleProps } from 'src/interfaces/IMarkdownArticleProps';
import { MyLink } from 'src/components/elements/link';
import { getAuthor, getDate } from 'src/utils';

interface IArticlesProps {
	articles: IMarkdownArticleProps[];
}

/**
 * The Articles component. 
 * @param {IArticlesProps} props - The props.
 */
const Articles = (props: IArticlesProps): ReactElement => {
    const router = useRouter();
	
    return (
        <>
            {props.articles.map((x, key) => (
                <div key={key}>
                    {getArticleElement(x, router.locale as string)}
                </div>
            ))}	
        </>
    );
};

/**
 * Returns the article element.
 * @param {IMarkdownArticleProps} article - The article.
 * @param {string} locale - The locale.
 */
const getArticleElement = (article: IMarkdownArticleProps, locale: string): ReactElement => {
    const author = getAuthor(article.author);
    const date = getDate(article.date, locale);
	
    return (
        <>
            <StyledTitle>
                <MyLink href={article.href}>{article.title}</MyLink>
            </StyledTitle>
            <StyledMetaData>{author} • {date}</StyledMetaData>
        </>
    );
};

export {
    Articles
};