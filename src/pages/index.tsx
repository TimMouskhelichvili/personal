import React, { ReactElement } from 'react';
import { SectionDescription } from 'src/componentsByPage/home/sectionDescription';
import { SectionServices } from 'src/componentsByPage/home/sectionServices';
import { SectionFirst } from 'src/componentsByPage/home/sectionFirst';
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
            <SectionFirst />
            <SectionDescription />
            <SectionServices />
        </Container>
    );
};

export default Home;