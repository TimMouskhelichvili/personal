import React, { ReactElement } from 'react';
import { StyledSideBySide } from './style';

interface ISideBySideProps {
	className?: string;
	children?: {};
}

/**
 * The SideBySide component.
 * @param {ISideBySideProps} props - The props.
 */
const SideBySide = (props: ISideBySideProps): ReactElement => (
    <StyledSideBySide className={props.className}>
        {props.children}
    </StyledSideBySide>
);

export {
    SideBySide
};