import React, { ReactElement } from 'react';
import { FirstSection } from 'src/componentsByPage/home/firstSection';
import { Container } from 'src/components/global/container';
import { Seo } from 'src/components/global/seo';
import { useLocale } from 'src/localizations';

/**
 * The Home component.
 */
const Home = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <Container>
            <Seo {...locale.sitemap.home} />
            <FirstSection />
        </Container>
    );
};

export default Home;