import React, { ReactElement } from 'react';
import { StyledSideBySide } from './style';

interface ISideBySideProps {
	className?: string;
	children?: {};
	customMargin?: string;
}

/**
 * The SideBySide component.
 * @param {ISideBySideProps} props - The props.
 */
const SideBySide = (props: ISideBySideProps): ReactElement => (
    <StyledSideBySide className={props.className} customMargin={props.customMargin}>
        {props.children}
    </StyledSideBySide>
);

export {
    SideBySide
};