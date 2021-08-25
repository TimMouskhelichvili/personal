import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { StyledMetaData, StyledTitle, StyledEmpty } from './style';
import { IMarkdownArticleProps } from 'src/interfaces/IMarkdownArticleProps';
import { MyLink } from 'src/components/elements/link';
import { getAuthor, getDate } from 'src/utils';
import { useLocale } from 'src/localizations';

interface IArticlesProps {
	articles: IMarkdownArticleProps[];
}

/**
 * The Articles component. 
 * @param {IArticlesProps} props - The props.
 */
const Articles = (props: IArticlesProps): ReactElement => {
    const locale = useLocale();
    const router = useRouter();
	
    if (!props.articles.length) {
        return <StyledEmpty>{locale.pages.blog.empty}</StyledEmpty>;
    }

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