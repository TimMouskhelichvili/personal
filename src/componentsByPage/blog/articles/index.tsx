import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { StyledMetaData, StyledTitle, StyledEmpty, StyledContainer, StyledArticleContainer, StyledTitleContainer } from './style';
import { IMarkdownArticleProps } from 'src/interfaces/IMarkdownArticleProps';
import { CustomImage } from 'src/components/elements/customImage';
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
        <StyledContainer>
            {props.articles.map((x, key) => (
                <div key={key}>
                    {getArticleElement(x, router.locale as string)}
                </div>
            ))}
        </StyledContainer>
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
        <StyledArticleContainer>
            {article.openGraphImage 
				&& (<MyLink href={article.href}>
				        <CustomImage 
				            src={article.openGraphImage} 
				            width={'100%'} 
				            height={'220px'} 
				            title={article.title} 
				            alt={article.title} />
				    </MyLink>)}
            <StyledTitleContainer>
                <StyledTitle>
                    <MyLink href={article.href} title={article.title}>
                        {article.title}
                    </MyLink>
                </StyledTitle>
                <StyledMetaData>{author} • {date}</StyledMetaData>
            </StyledTitleContainer>
        </StyledArticleContainer>
    );
};

export {
    Articles
};