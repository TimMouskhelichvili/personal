import React, { ReactElement } from 'react';
import { StyledTitle } from './style';

interface ITitleProps {
	title: string;
}

/**
 * The Title component. 
 * @param {ITitleProps} props - The props.
 */
const Title = (props: ITitleProps): ReactElement => (
    <StyledTitle>{props.title}</StyledTitle>
);

export {
    Title
};