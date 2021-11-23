import React, { ReactElement } from 'react';
import { StyledContainer, StyledTitle, StyledItem, StyledList } from './style';
import { getIdFromText, getTitleForSummary } from 'src/utils/markdown';
import { IMarkdownHeading } from 'src/interfaces/IMarkdownHeading';
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
            <StyledList>
                {props.headings.map((heading): ReactElement => (
                    <li key={heading.title}>
                        <StyledItem href={`#${getIdFromText(heading.title)}`}>
                            {getTitleForSummary(heading.title)}
                        </StyledItem>
                    </li>
                ))}
            </StyledList>
        </StyledContainer>
    );
};

export {
    Summary
};