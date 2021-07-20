import React, { ReactElement } from 'react';
import { useAmp } from 'next/amp';

interface ICustomImageProps {
	src: string;
	height?: string;
	heights?: string;
	layout?: string;
	width?: string;
	alt?: string;
	loading?: 'eager' | 'lazy';
	title?: string;
}

/**
 * The custom image component.
 * @param {ICustomImageProps} props - The props.
 */
const CustomImage = (props: ICustomImageProps): ReactElement => {
    const webpSrc = `${props.src.substr(0, props.src.lastIndexOf('.')) }.webp`;
    const isAmp = useAmp();

    if (isAmp) {
        return (
            <amp-img 
                src={webpSrc}
                layout={props.layout}
                height={props.height} 
                width={props.width} 
                alt={props.alt}
                title={props.title}
                heights={props.heights}>
                <amp-img
                    fallback={''}
                    src={props.src}
                    layout={props.layout}
                    height={props.height} 
                    width={props.width} 
                    alt={props.alt}
                    title={props.title}
                    heights={props.heights} />
            </amp-img>
        );
    }

    return (
        <picture>
            <source srcSet={webpSrc} type={'image/webp'} />
            <img 
                src={props.src}
                height={props.height} 
                width={props.width} 
                alt={props.alt}
                title={props.title}
                loading={props.loading} />
        </picture>
    );
};

export {
    CustomImage
};