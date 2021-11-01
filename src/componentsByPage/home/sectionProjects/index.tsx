import React, { ReactElement } from 'react';
import { SectionBookConsultation } from '../sectionBookConsultation';
import { StyledSection, StyledTitle } from './style';
import { Projects } from 'src/componentsByPage/portfolio/projects';
import { SubTitle } from 'src/components/landing/subTitle';
import { Row } from 'src/components/elements/row';
import { useLocale } from 'src/localizations';

/**
 * The SectionProjects components.
 */
const SectionProjects = (): ReactElement => {
    const locale = useLocale();

    return (
        <StyledSection>
            <Row>
                <SubTitle>{locale.pages.home.portfolio.subTitle}</SubTitle>
                <StyledTitle>{locale.pages.home.portfolio.title}</StyledTitle>
                <Projects noLinks />
                <SectionBookConsultation />
            </Row>
        </StyledSection>
    );
};

export {
    SectionProjects
};