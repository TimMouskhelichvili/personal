import React, { ReactElement } from 'react';
import { StyledTitle } from './style';

interface ITitleProps {
	className?: string;
	children?: {};
	marginBottom?: string;
}

/**
 * The Title component.
 * @param {ITitleProps} props - The props.
 */
const Title = (props: ITitleProps): ReactElement => (
    <StyledTitle 
        className={props.className} 
        marginBottom={props.marginBottom}>
        {props.children}
    </StyledTitle>
);

export {
    Title
};