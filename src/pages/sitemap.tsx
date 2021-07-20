import React, { ReactElement } from 'react';
import { SitemapRoutes } from 'src/componentsByPage/sitemap';
import { Container } from 'src/components/global/container';
import { Title } from 'src/components/global/title';
import { Row } from 'src/components/elements/row';
import { Seo } from 'src/components/global/seo';
import { useLocale } from 'src/localizations';

export const config = { amp: 'hybrid' };

/**
 * The Sitemap component. 
 */
const Sitemap = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <Container>
            <Row>
                <Seo {...locale.sitemap.sitemap} hasAmp={true} />
                <Title title={locale.pages.sitemap.title} />
                <SitemapRoutes />
            </Row>
        </Container>
    );
};

export default Sitemap;