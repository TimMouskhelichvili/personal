import React, { ReactElement } from 'react';
import { StyledTitle } from './style';

interface ITitleProps {
	title: string;
	className?: string;
}

/**
 * The Title component. 
 * @param {ITitleProps} props - The props.
 */
const Title = (props: ITitleProps): ReactElement => (
    <StyledTitle className={props.className}>{props.title}</StyledTitle>
);

export {
    Title
};