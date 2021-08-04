import React, { ReactElement } from 'react';
import { StyledSection, StyledSeparator, StyleImgContainer, StyledItalic } from './style';
import { CustomImage } from 'src/components/elements/customImage';
import { SideBySide } from 'src/components/landing/sideBySide';
import { Paragraph } from 'src/components/elements/paragraph';
import { SpanText } from 'src/components/elements/spanText';
import { SubTitle } from 'src/components/landing/subTitle';
import { Title } from 'src/components/landing/title';
import { useLocale } from 'src/localizations';

/**
 * The SectionDescription component.
 */
const SectionDescription = (): ReactElement => {
    const locale = useLocale();

    return (
        <StyledSection>
            <SideBySide>
                <div>
                    <SubTitle>{locale.pages.home.description.subTitle}</SubTitle>
                    <Title>{locale.pages.home.description.title}</Title>
                    <StyleImgContainer>
                        <CustomImage
                            loading={'lazy'} 
                            height={'400px'}
                            width={'450px'}
                            alt={locale.pages.home.description.alt}
                            src={'/static/images/home/timMouskhelichvili3.jpg'} />
                    </StyleImgContainer>
                </div>
                <Paragraph>
                    <div>
                        <SpanText html={locale.pages.home.description.description1} />
                    </div>
                    <StyledSeparator />
                    <StyledItalic>
                        <SpanText html={locale.pages.home.description.description2} />
                    </StyledItalic>
                </Paragraph>
            </SideBySide>
        </StyledSection>
    );
};

export {
    SectionDescription
};