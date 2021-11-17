/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { LightAsync } from 'react-syntax-highlighter';
import { StyledMarkdownContainer, StyledMetaData } from './style';
import { IMarkdownArticleProps } from 'src/interfaces/IMarkdownArticleProps';
import { CustomImage } from 'src/components/elements/customImage';
import { markDownTheme } from 'src/theme/externals/markdown';
import { Youtube } from 'src/components/elements/youtube';
import { Title } from 'src/components/global/title';
import { configuration } from 'src/configuration';
import { Seo } from 'src/components/global/seo';
import { getAuthor, getDate } from 'src/utils';

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
            <ReactMarkdown components={{ a, code, img }} remarkPlugins={[ remarkGfm ]}>
                {props.source || ''}
            </ReactMarkdown>
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
    const language = data.language || null;
    const value = data.children?.[0]?.trim();

    if (!value) return null;

    return (
        <LightAsync language={language} style={markDownTheme}>
            {value}
        </LightAsync>
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