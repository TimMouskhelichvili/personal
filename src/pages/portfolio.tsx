import React, { ReactElement } from 'react';
import { SectionProjects } from 'src/componentsByPage/portfolio/sectionProjects';
import { Container } from 'src/components/global/container';
import { Row } from 'src/components/elements/row';
import { Seo } from 'src/components/global/seo';
import { useLocale } from 'src/localizations';
import { Title } from 'src/components/global/title';

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
                <SectionProjects />
            </Row>
        </Container>
    );
};

export default Portfolio;