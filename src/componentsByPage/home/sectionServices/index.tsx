import React, { ReactElement } from 'react';
import { StyledSection, StyledExpertiseContainer, StyledTitle, StyledParagraph, StyledSeparator, StyledPS } from './style';
import { SectionBookConsultation } from 'src/componentsByPage/home/sectionBookConsultation';
import { SubTitle } from 'src/components/landing/subTitle';
import { Title } from 'src/components/landing/title';
import { Row } from 'src/components/elements/row';
import { useLocale } from 'src/localizations';

/**
 * The SectionServices component.
 */
const SectionServices = (): ReactElement => {
    const locale = useLocale();

    return (
        <StyledSection>
            <Row>
                <SubTitle>{locale.pages.home.services.subTitle}</SubTitle>
                <Title>{locale.pages.home.services.title}</Title>
                <StyledExpertiseContainer>
                    {locale.pages.home.services.list.map((x, key) => (
                        <div key={key}>
                            <StyledTitle>{x.title}</StyledTitle>
                            <StyledParagraph>{x.description}</StyledParagraph>
                        </div>
                    ))}
                </StyledExpertiseContainer>
                <StyledSeparator/>
                <StyledPS>{locale.pages.home.services.ps}</StyledPS>
                <SectionBookConsultation />
            </Row>
        </StyledSection>
    );
};

export {
    SectionServices
};