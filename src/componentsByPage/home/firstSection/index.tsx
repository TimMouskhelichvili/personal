import React, { ReactElement } from 'react';
import { StyleImgContainer } from './style';
import { CustomImage } from 'src/components/elements/customImage';
import { SideBySide } from 'src/components/global/sideBySide';
import { Row } from 'src/components/elements/row';

/**
 * The FirstSection component.
 */
const FirstSection = (): ReactElement => {
    return (
        <Row>
            <SideBySide>
                <div>
					asd
                </div>
                <StyleImgContainer>
                    <div>
                        <CustomImage 
                            height={'500px'}
                            width={'450px'}
                            src={'/static/images/home/timmouskhelichvili.jpg'} />
                    </div>
                </StyleImgContainer>
            </SideBySide>
        </Row>
    );
};

export {
    FirstSection
};