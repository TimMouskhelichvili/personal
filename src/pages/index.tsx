import React, { ReactElement } from 'react';
import { SectionDescription } from 'src/componentsByPage/home/sectionDescription';
import { SectionTalkExpert } from 'src/componentsByPage/home/sectionTalkExpert';
import { SectionServices } from 'src/componentsByPage/home/sectionServices';
import { SectionQuotes } from 'src/componentsByPage/home/sectionQuotes';
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
            <SectionQuotes />
            <SectionTalkExpert />
        </Container>
    );
};

export default Home;