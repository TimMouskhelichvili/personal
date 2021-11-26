import React, { ReactElement } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { StyledContainer, StyledDetailsContainer, StyledAuthorName, StyledSubTitle, StyledButton, StyledImageContainer } from './style';
import { CustomImage } from 'src/components/elements/customImage';
import { SpanText } from 'src/components/elements/spanText';
import { useLocale } from 'src/localizations';
import { configuration } from 'src/configuration';
import { Icon } from 'src/components/elements/icon';

/**
 * The Author Component.
 */
const Author = (): ReactElement => {
    const locale = useLocale();

    return (
        <StyledContainer>
            <StyledImageContainer>
                <CustomImage 
                    height={'150px'} 
                    width={'150px'}
                    src={'/static/images/blog/author.jpg'} 
                    loading={'lazy'} />
            </StyledImageContainer>
            <StyledDetailsContainer>
                <StyledSubTitle>{locale.pages.article.writtenBy}</StyledSubTitle>
                <StyledAuthorName>{configuration.general.author}</StyledAuthorName>
                <div>
                    <SpanText html={locale.pages.article.description} />
                </div>
                <StyledButton className={configuration.classes.triggerTAWK}>
                    {locale.pages.article.contactMe}
                    <Icon icon={faArrowRight} />
                </StyledButton>
            </StyledDetailsContainer>
        </StyledContainer>
    );
};

export {
    Author
};