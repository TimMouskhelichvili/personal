import React, { ReactElement } from 'react';
import { NotFoundContainer } from 'src/componentsByPage/notFound';
import { Container } from 'src/components/global/container';
import { Row } from 'src/components/elements/row';

/**
 * The NotFound component. 
 */
const NotFound = (): ReactElement => (
    <Container>
        <Row>
            <NotFoundContainer />
        </Row>
    </Container>
);

export default NotFound;