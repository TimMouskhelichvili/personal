import React, { ReactElement } from 'react';
import { StyledRow } from './style';

interface IRowProps {
	children?: {};
	className?: string;
	maxWidth?: string;
}

/**
 * The row component.
 * @param {IRowProps} props - The props.
 */
const Row = (props: IRowProps): ReactElement => (
    <StyledRow className={props.className} maxWidth={props.maxWidth}>
        {props.children}
    </StyledRow>
);

export {
    Row
};