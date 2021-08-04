import React, { ReactElement } from 'react';
import { StyledSubTitle } from './style';

interface ISubTitleProps {
	className?: string;
	children?: {};
}

/**
 * The SubTitle component.
 * @param {ISubTitleProps} props - The props.
 */
const SubTitle = (props: ISubTitleProps): ReactElement => (
    <StyledSubTitle className={props.className}>
        {props.children}
    </StyledSubTitle>
);

export {
    SubTitle
};