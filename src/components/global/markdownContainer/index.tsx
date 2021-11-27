import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { 
    StyledContainer, StyledMetaData, StyledTitle, StyledSocialContainer, 
    StyledMarkdownContainer, StyledSummaryContainer, StyledTitleContainer,
    StyledAuthorContainer, StyledTitleData, StyledAuthorTitleContainer
} from './style';
import { SocialMedias } from 'src/components/global/markdownContainer/components/socialMedias';
import { CustomMDX } from 'src/components/global/markdownContainer/components/mdxRemote';
import { Summary } from 'src/components/global/markdownContainer/components/summary';
import { IMarkdownArticleProps } from 'src/interfaces/IMarkdownArticleProps';
import { Seo } from 'src/components/global/seo';
import { getAuthor, getDate } from 'src/utils';
import { CustomImage } from 'src/components/elements/customImage';
import { Icon } from 'src/components/elements/icon';

interface IMarkdownContainerProps extends IMarkdownArticleProps {
	hasAmp?: boolean;
	clear?: boolean;
}

/**
 * The MarkdownContainer component. 
 * @param {IMarkdownContainerProps} props - The props.
 */
const MarkdownContainer = (props: IMarkdownContainerProps): ReactElement => {
    const router = useRouter();
    const author = getAuthor(props.author);
    const date = getDate(props.date, router.locale);
    const authorEl = !props.clear && getAuthorElement(author, date);

    return (
        <>
            <StyledTitleContainer clear={props.clear}>
                <StyledTitle title={props.title} />
                {authorEl}
                <Seo {...props} hasAmp />
            </StyledTitleContainer>
            <StyledContainer>
                {!props.clear && 
					<StyledSocialContainer>
					    <SocialMedias />
					</StyledSocialContainer>}
                <StyledMarkdownContainer clear={props.clear}>
                    <CustomMDX source={props.source} headings={props.headings} clear={props.clear} />
                </StyledMarkdownContainer>
                {!props.clear &&
					<StyledSummaryContainer>
					    <Summary headings={props.headings} />
					</StyledSummaryContainer>}
            </StyledContainer>
        </>
    );
};

/**
 * Returns the author element.
 * @param {string} author - The author. 
 * @param {string} date - The date. 
 */
const getAuthorElement = (author: string, date: string): ReactElement => {
    return (
        <StyledAuthorContainer>
            <CustomImage 
                height={'45px'} 
                width={'45px'} 
                src={'/static/images/blog/author_tim.jpg'} />
            <StyledAuthorTitleContainer>
                <StyledTitleData>{author}</StyledTitleData>
                <StyledMetaData>
                    <Icon icon={faCalendarAlt }/> {date}
                </StyledMetaData>
            </StyledAuthorTitleContainer>
        </StyledAuthorContainer>
    );
};

export {
    MarkdownContainer
};