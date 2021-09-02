import React, { ReactElement } from 'react';
import { StyledH3, StyledSection, StyleImgContainer, StyledLanguagesContainer } from './style';
import { CustomImage } from 'src/components/elements/customImage';
import { SideBySide } from 'src/components/landing/sideBySide';
import { SubTitle } from 'src/components/landing/subTitle';
import { Title } from 'src/components/landing/title';
import { Row } from 'src/components/elements/row';
import { useLocale } from 'src/localizations';

/**
 * The SectionLanguages component.
 */
const SectionLanguages = (): ReactElement => {
    const locale = useLocale();
    const { subTitle, title, list, alt } = locale.pages.home.languages;
	
    return (
        <StyledSection>
            <Row>
                <SubTitle>{subTitle}</SubTitle>
                <Title>{title}</Title>
            </Row>
            <SideBySide>
                <div>
                    {list.map((x, key) => (
                        <div key={key}>
                            <StyledH3>{x.title}</StyledH3>
                            <StyledLanguagesContainer>
                                {x.subList.map((x2, key2) => (
                                    <div key={key2}>{x2}</div>
                                ))}
                            </StyledLanguagesContainer>
                        </div>
                    ))}
                </div>
                <div>
                    <StyleImgContainer>
                        <CustomImage
                            loading={'lazy'} 
                            height={'400px'}
                            width={'450px'}
                            alt={alt}
                            title={alt}
                            src={'/static/images/home/timMouskhelichvili2.jpg'} />
                    </StyleImgContainer>
                </div>
            </SideBySide>
        </StyledSection>
    );
};

export {
    SectionLanguages
};