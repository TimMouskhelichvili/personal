import React, { ReactElement } from 'react';
import { StyledContainer, StyledTitle, StyledItem } from './style';
import { IMarkdownHeading } from 'src/interfaces/IMarkdownHeading';
import { getIdFromText } from 'src/utils/markdown';
import { useLocale } from 'src/localizations';

interface ISummaryProps {
	headings: IMarkdownHeading[];
}

/**
 * The Summary component.
 * @param {ISummaryProps} props - The props.
 */
const Summary = (props: ISummaryProps): ReactElement | null => {
    const locale = useLocale();

    if (!props.headings?.length) return null;
    
    return (
        <StyledContainer>
            <StyledTitle>
                {locale.pages.blog.summary}
            </StyledTitle>
            {props.headings.map((heading): ReactElement => (
                <StyledItem key={heading.title} href={`#${getIdFromText(heading.title)}`}>
                    {heading.title}
                </StyledItem>
            ))}
        </StyledContainer>
    );
};

export {
    Summary
};