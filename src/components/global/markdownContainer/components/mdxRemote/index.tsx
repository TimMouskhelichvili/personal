/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { StyledCustomMDXContainer, StyledSocialTabContainer } from './style';
import { SocialMedias } from 'src/components/global/markdownContainer/components/socialMedias';
import { CustomImage } from 'src/components/elements/customImage';
import { Youtube } from 'src/components/elements/youtube';
import { configuration } from 'src/configuration';
import { getIdFromText } from 'src/utils/markdown';

const LANGUAGES: string[] = [];

interface ICustomMDXProps {
	source: {
		compiledSource: string;
		source: string;
	};
}

/**
 * The CustomMDX component. 
 * @param {ICustomMDXProps} props - The props.
 */
const CustomMDX = (props: ICustomMDXProps): ReactElement => {
    return (
        <StyledCustomMDXContainer>
            <MDXRemote components={{ a, code, h2, h3, h4, h5, img }} {...props.source} />
            <StyledSocialTabContainer>
                <SocialMedias />
            </StyledSocialTabContainer>
        </StyledCustomMDXContainer>
    );
};

/**
 * The images component.
 * @param {any} data - The data. 
 */
const img = (data: any): ReactElement => {
    const src = data.src as string;
    const title = data.alt;

    if (src.startsWith(configuration.general.youtube.embed)) {
        return <Youtube videoId={src.replace(configuration.general.youtube.embed, '')} />;
    }
    
    return (
        <CustomImage 
            src={src} 
            alt={title} 
            title={title} 
            loading="lazy" 
            layout={'intrinsic'} />
    );
};

/**
 * The code component.
 * @param {any} data - The data. 
 */
const code = (data: any): ReactElement | null => {
    const language = (data.className || '').replace('language-', '');
    const value = data.children?.trim();

    if (!value) return null;

    if (LANGUAGES.includes(language)) {
        return null;
        //return <Refractor language={language} value={value} />;
    }

    return (
        <code>{value}</code>
    );
};

/**
 * The a component.
 * @param {any} data - The data. 
 */
const a = (data: any): ReactElement | null => {
    const href = data.href as string;

    const props = {
        href
    };

    if (href.startsWith('https://')) {
        props['rel'] = 'noreferrer';
        props['target'] = '_blank';
    }
    return (
        <a {...props}>
            {data.children}
        </a>
    );
};

/**
 * The h2 component.
 * @param {any} data - The data. 
 */
const h2 = (data: any): ReactElement => {
    return <h2 id={getIdFromText(data.children)}>{data.children}</h2>;	
};

/**
 * The h3 component.
 * @param {any} data - The data. 
 */
const h3 = (data: any): ReactElement => {
    return <h3 id={getIdFromText(data.children)}>{data.children}</h3>;	
};

/**
 * The h4 component.
 * @param {any} data - The data. 
 */
const h4 = (data: any): ReactElement => {
    return <h4 id={getIdFromText(data.children)}>{data.children}</h4>;	
};

/**
 * The h5 component.
 * @param {any} data - The data. 
 */
const h5 = (data: any): ReactElement => {
    return <h5 id={getIdFromText(data.children)}>{data.children}</h5>;
};

export {
    CustomMDX
};