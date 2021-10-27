import React, { ReactElement } from 'react';
import { SectionLanguages } from 'src/componentsByPage/resume/sectionLanguages';
import { Container } from 'src/components/global/container';
import { Row } from 'src/components/elements/row';
import { Seo } from 'src/components/global/seo';
import { useLocale } from 'src/localizations';

/**
 * The Resume component. 
 */
const Resume = (): ReactElement => {
    const locale = useLocale();

    return (
        <Container>
            <Row>
                <Seo {...locale.sitemap.resume} />
                <SectionLanguages />
            </Row>
        </Container>
    );
};

export default Resume;