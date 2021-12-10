import React, { ReactElement } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useAmp } from 'next/amp';
import { StyledContainer, StyledDetailsContainer, StyledAuthorName, StyledSubTitle, StyledButton, StyledImageContainer } from './style';
import { CustomImage } from 'src/components/elements/customImage';
import { SpanText } from 'src/components/elements/spanText';
import { Icon } from 'src/components/elements/icon';
import { configuration } from 'src/configuration';
import { useLocale } from 'src/localizations';

/**
 * The Author Component.
 */
const Author = (): ReactElement => {
    const locale = useLocale();
    const amp = useAmp();

    const aProps = amp ? {
        href: locale.global.tawkToDirect,
        target: '_blank'
    } : {};

    return (
        <StyledContainer>
            <StyledImageContainer>
                <CustomImage 
                    height={'150px'} 
                    width={'150px'}
                    alt={locale.pages.article.author}
                    src={'/static/images/blog/author_tim.jpg'} 
                    loading={'lazy'} />
            </StyledImageContainer>
            <StyledDetailsContainer>
                <StyledSubTitle>{locale.pages.article.writtenBy}</StyledSubTitle>
                <StyledAuthorName>{configuration.general.author}</StyledAuthorName>
                <div>
                    <SpanText html={locale.pages.article.description} />
                </div>
                <StyledButton className={configuration.classes.triggerTAWK} {...aProps}>
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