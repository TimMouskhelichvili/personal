/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { MDXRemote } from 'next-mdx-remote';
// import Refractor from 'react-refractor';
import { StyledMarkdownContainer, StyledMetaData } from './style';
import { IMarkdownArticleProps } from 'src/interfaces/IMarkdownArticleProps';
import { CustomImage } from 'src/components/elements/customImage';
import { Youtube } from 'src/components/elements/youtube';
import { Title } from 'src/components/global/title';
import { configuration } from 'src/configuration';
import { Seo } from 'src/components/global/seo';
import { getAuthor, getDate } from 'src/utils';

const LANGUAGES: string[] = [];

interface IMarkdownContainerProps extends IMarkdownArticleProps {
	hasAmp?: boolean;
}
/**
 * The MarkdownContainer component. 
 * @param {IMarkdownContainerProps} props - The props.
 */
const MarkdownContainer = (props: IMarkdownContainerProps): ReactElement => {
    const router = useRouter();
    const author = getAuthor(props.author);
    const date = getDate(props.date, router.locale);

    return (
        <StyledMarkdownContainer>
            <Title title={props.title} />
            <StyledMetaData>{author} • {date}</StyledMetaData>
            <Seo {...props} />
            <MDXRemote components={{ a, code, img }} {...props.source} />
        </StyledMarkdownContainer>
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

export {
    MarkdownContainer
};