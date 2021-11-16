import React, { ReactElement } from 'react';
import { useAmp } from 'next/amp';

interface ICustomImageProps {
	src: string;
	srcset?: string;
	height?: string;
	heights?: string;
	layout?: string;
	width?: string;
	alt?: string;
	loading?: 'eager' | 'lazy';
	title?: string;
	media?: {
		media: string;
		src: string;	
	}[];
}

/**
 * The custom image component.
 * @param {ICustomImageProps} props - The props.
 */
const CustomImage = (props: ICustomImageProps): ReactElement => {
    const isAmp = useAmp();

    if (isAmp) {
        return (
            <amp-img 
                src={getWebP(props.src)}
                layout={props.layout}
                height={getHeight(props)}
                width={getWidth(props)} 
                alt={props.alt}
                title={props.title}
                heights={props.heights}>
                <amp-img
                    fallback={''}
                    src={props.src}
                    layout={props.layout}
                    height={getHeight(props)}
                    width={getWidth(props)} 
                    alt={props.alt}
                    title={props.title}
                    heights={props.heights} />
            </amp-img>
        );
    }

    return getPicture(props);
};

/**
 * Returns the picture.
 * @param {ICustomImageProps} props - The props.
 */
const getPicture = (props: ICustomImageProps): ReactElement => {
    return (
        <picture>
            <source srcSet={getWebP(props.src)} type={'image/webp'} />
            {props.media && (
                <>
                    {props.media.map((x, key) => (
                        <source key={key} media={x.media} srcSet={getWebP(x.src)} type={'image/webp'} />
                    ))}
                </>
            )}
            <img 
                src={props.src}
                height={getHeight(props)} 
                width={getWidth(props)}
                alt={props.alt}
                title={props.title}
                loading={props.loading} />
        </picture>
    );
};

/**
 * Returns the webP.
 * @param {string} src - The src. 
 */
const getWebP = (src: string): string => {
    return src;
    //return `${src.substr(0, src.lastIndexOf('.')) }.webp`;
};

/**
 * Returns the height of the the picture.
 * @param {ICustomImageProps} props - The props.
 */
const getHeight = (props: ICustomImageProps): string => {
    return props.height || process.env.images[props.src]?.height;
};

/**
 * Returns the width of the picture.
 * @param {ICustomImageProps} props - The props.
 */
const getWidth = (props: ICustomImageProps): string => {
    return props.width || process.env.images[props.src]?.width;
};

export {
    CustomImage
};