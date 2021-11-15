import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import { LightAsync } from 'react-syntax-highlighter';
import { StyledMarkdownContainer, StyledMetaData } from './style';
import { IMarkdownArticleProps } from 'src/interfaces/IMarkdownArticleProps';
import { Title } from 'src/components/global/title';
import { Seo } from 'src/components/global/seo';
import { getAuthor, getDate } from 'src/utils';
import { markDownTheme } from 'src/theme/externals/markdown';

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
            <ReactMarkdown components={{ code, img }}>{props.source || ''}</ReactMarkdown>
        </StyledMarkdownContainer>
    );
};

const img = (data: {}): ReactElement => {
    const src = data['src'] as string;
    const title = data['alt'];

    if (src.startsWith('https://www.youtube.com/embed/')) {
        return <iframe src={src} title={title} allowFullScreen loading="lazy" />;
    }
    

    return <img src={src} alt={title} title={title} loading="lazy" />;
};

const code = (data: {}): ReactElement | null => {
    const language = data['language'] || null;
    const value = data['children']?.[0]?.trim();

    if (!value) return null;

    return (
        <LightAsync language={language} style={markDownTheme}>
            {value}
        </LightAsync>
    );
};

export {
    MarkdownContainer
};