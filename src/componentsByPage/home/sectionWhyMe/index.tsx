import React, { ReactElement } from 'react';
import { StyledSection, StyledListContainer, StyledTitle, StyledParagraph } from './style';
import { SubTitle } from 'src/components/landing/subTitle';
import { Title } from 'src/components/landing/title';
import { Row } from 'src/components/elements/row';
import { useLocale } from 'src/localizations';

/**
 * The SectionWhyMe component.
 */
const SectionWhyMe = (): ReactElement => {
    const locale = useLocale();
    const { subTitle, title, list } = locale.pages.home.whyMe;
	
    return (
        <StyledSection>
            <Row>
                <SubTitle>{subTitle}</SubTitle>
                <Title>{title}</Title>
                <StyledListContainer>
                    {list.map((x, key) => (
                        <div key={key}>
                            <StyledTitle>✅&nbsp;&nbsp;{x.title}</StyledTitle>
                            <StyledParagraph>{x.description}</StyledParagraph>
                        </div>
                    ))}
                </StyledListContainer>
            </Row>
        </StyledSection>
    );
};

export {
    SectionWhyMe
};