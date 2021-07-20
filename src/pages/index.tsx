import React, { ReactElement } from 'react';
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
            <h1>First</h1>
        </Container>
    );
};

export default Home;