import React, { ReactElement } from 'react';
import { StyledParagraph } from 'src/componentsByPage/portfolio/style';
import { Projects } from 'src/componentsByPage/portfolio/projects';
import { Container } from 'src/components/global/container';
import { Title } from 'src/components/global/title';
import { Row } from 'src/components/elements/row';
import { Seo } from 'src/components/global/seo';
import { useLocale } from 'src/localizations';

/**
 * The Portfolio component. 
 */
const Portfolio = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <Container>
            <Row>
                <Seo {...locale.sitemap.portfolio} />
                <Title title={locale.pages.portfolio.title} />
                <StyledParagraph>{locale.pages.portfolio.body}</StyledParagraph>
                <Projects />
            </Row>
        </Container>
    );
};

export default Portfolio;