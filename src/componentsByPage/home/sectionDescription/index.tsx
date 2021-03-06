import React, { ReactElement } from 'react';
import { StyledSection, StyledSeparator, StyleImgContainer, StyledQuote, StyledDescription, StyledContainer } from './style';
import { CustomImage } from 'src/components/elements/customImage';
import { SideBySide } from 'src/components/landing/sideBySide';
import { Paragraph } from 'src/components/elements/paragraph';
import { SpanText } from 'src/components/elements/spanText';
import { SubTitle } from 'src/components/landing/subTitle';
import { Title } from 'src/components/landing/title';
import { Icons } from 'src/components/global/icons';
import { useLocale } from 'src/localizations';

/**
 * The SectionDescription component.
 */
const SectionDescription = (): ReactElement => {
    const locale = useLocale();
    const { subTitle, title, alt, description1, description2 } = locale.pages.home.description;
    const imgEl = getCustomImg(alt);

    return (
        <StyledSection>
            <SideBySide>
                <StyledContainer>
                    <SubTitle>{subTitle}</SubTitle>
                    <Title>{title}</Title>
                    {imgEl}
                </StyledContainer>
                <Paragraph>
                    <StyledDescription>
                        <SpanText html={description1} />
                    </StyledDescription>
                    <StyledSeparator />
                    <StyledQuote>
                        <SpanText html={description2} />
                    </StyledQuote>
                    <div>
                        <Icons />
                    </div>
                </Paragraph>
            </SideBySide>
        </StyledSection>
    );
};

/**
 * Returns the custom img.
 * @param {string} alt - The alt.
 */
const getCustomImg = (alt: string): ReactElement => (
    <StyleImgContainer>
        <CustomImage
            loading={'lazy'} 
            height={'400px'}
            width={'450px'}
            alt={alt}
            title={alt}
            media={[
                { media: '(max-width: 999px)', src: '/static/images/home/timMouskhelichvili.jpg' },
                { media: '(min-width: 1000px)', src: '/static/images/home/timMouskhelichvili3.jpg' }
            ]}
            src={'/static/images/home/timMouskhelichvili3.jpg'} />
    </StyleImgContainer>
);

export {
    SectionDescription
};