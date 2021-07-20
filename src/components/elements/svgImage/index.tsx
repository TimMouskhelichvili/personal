import React, { ReactElement } from 'react';

interface ISVGImageProps {
	viewBox: string;
	href: string;
	className?: string;
}

/**
 * The SVGImage component.
 * @param {ISVGImageProps} props - The props.
 */
const SVGImage = (props: ISVGImageProps): ReactElement => (
    <svg viewBox={props.viewBox} className={props.className}>
        <use href={props.href} />
    </svg>
);

export {
    SVGImage
};