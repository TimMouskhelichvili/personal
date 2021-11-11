import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import { StyledMarkdownContainer, StyledMetaData } from './style';
import { IMarkdownArticleProps } from 'src/interfaces/IMarkdownArticleProps';
import { Title } from 'src/components/global/title';
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
            <ReactMarkdown components={{ img }}>{props.source || ''}</ReactMarkdown>
        </StyledMarkdownContainer>
    );
};

const img = (data: {}): ReactElement => {
    const src = data['src'];
    const title = data['alt'];

    return <iframe src={src} title={title} allowFullScreen loading="lazy" />;
};

export {
    MarkdownContainer
};