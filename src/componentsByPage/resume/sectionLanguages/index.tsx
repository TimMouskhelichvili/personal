import React, { ReactElement } from 'react';
import { StyledH3, StyledSection, StyleImgContainer, StyledLanguagesContainer, StyledSideBySide } from './style';
import { CustomImage } from 'src/components/elements/customImage';
import { SubTitle } from 'src/components/landing/subTitle';
import { Title } from 'src/components/landing/title';
import { useLocale } from 'src/localizations';

/**
 * The SectionLanguages component.
 */
const SectionLanguages = (): ReactElement => {
    const locale = useLocale();
    const { subTitle, title, list, alt } = locale.pages.resume.languages;
	
    return (
        <StyledSection>
            <SubTitle>{subTitle}</SubTitle>
            <Title>{title}</Title>
            <StyledSideBySide>
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
            </StyledSideBySide>
        </StyledSection>
    );
};

export {
    SectionLanguages
};