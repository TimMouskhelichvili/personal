import React, { ReactElement } from 'react';
import { StyledParagraph } from './style';

interface IParagraphProps {
	className?: string;
	children?: {};
}

/**
 * The Paragraph component.
 * @param {IParagraphProps} props - The props.
 */
const Paragraph = (props: IParagraphProps): ReactElement => (
    <StyledParagraph className={props.className}>
        {props.children}
    </StyledParagraph>
);

export {
    Paragraph
};