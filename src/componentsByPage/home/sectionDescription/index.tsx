import React, { ReactElement } from 'react';
import { StyledSection, StyledSeparator, StyleImgContainer, StyledQuote } from './style';
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
	
    return (
        <StyledSection>
            <SideBySide>
                <div>
                    <SubTitle>{subTitle}</SubTitle>
                    <Title>{title}</Title>
                    <StyleImgContainer>
                        <CustomImage
                            loading={'lazy'} 
                            height={'400px'}
                            width={'450px'}
                            alt={alt}
                            title={alt}
                            src={'/static/images/home/timMouskhelichvili3.jpg'} />
                    </StyleImgContainer>
                </div>
                <Paragraph>
                    <div>
                        <SpanText html={description1} />
                    </div>
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

export {
    SectionDescription
};