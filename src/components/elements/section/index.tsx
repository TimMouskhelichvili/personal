import React, { ReactElement } from 'react';
import { StyledContainer } from './style';

interface IPropsSection {
	className?: string;
	children?: {};
}

/**
 * The Section component.
 * @param {IPropsSection} props - The props.
 */
const Section = (props: IPropsSection): ReactElement => (
    <StyledContainer className={props.className}>
        {props.children}
    </StyledContainer>
);

export {
    Section
};