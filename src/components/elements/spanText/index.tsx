import React, { ReactElement } from 'react';

interface ISpanTextProps {
	html: string;
}

/**
 * The SpanText Component.
 * @param {ISpanTextProps} props - The props.
 */
const SpanText = (props: ISpanTextProps): ReactElement => (
    <span dangerouslySetInnerHTML={{ 
        __html: props.html
    }}></span>
);

export {
    SpanText
};