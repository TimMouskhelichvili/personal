import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { IMarkdownArticleProps } from 'src/interfaces/IMarkdownArticleProps';
import { MarkdownContainer } from 'src/components/global/markdownContainer';
import { Container } from 'src/components/global/container';
import { IStaticProps } from 'src/interfaces/IStaticProps';
import { Row } from 'src/components/elements/row';
import { IPages } from 'src/interfaces/IPages';

interface IArticleProps {
	pages: {
		[key in string]: IMarkdownArticleProps;
	};
	name: string;
	redirectLanguageToIndex: boolean;
}

export const config = { amp: 'hybrid' };

/**
 * The Article component.
 * @param {IArticleProps} props - The props.
 */
const Page = (props: IArticleProps): ReactElement => {
    const router = useRouter();
    const page = props.pages?.[router.locale as string];

    return (
        <Container redirectLanguageToIndex={props.redirectLanguageToIndex}>
            <Row>
                <MarkdownContainer {...page} hasAmp={true} />
            </Row>
        </Container>
    );
};

/**
 * Returns the static paths.
 */
export const getStaticPaths = (): {} => {
    return {
        fallback: false,  
        paths: process.env.markdown.paths.pages
    };
};

/**
 * Returns the static props.
 * @param {IStaticProps} context - The context. 
 */
export const getStaticProps = async (context: IStaticProps): Promise<{}> => {
    const { getPages } = require('../../config/utils/markdown');
    const pages = (getPages() as IPages).pages[context.params.name];
	
    if (!pages?.[context.locale]) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            name: context.params.name,
            pages,
            redirectLanguageToIndex: Object.keys(pages).length === 1
        }
    };
};

export default Page;