import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { serialize } from 'next-mdx-remote/serialize';
import { IMarkdownArticleProps } from 'src/interfaces/IMarkdownArticleProps';
import { MarkdownContainer } from 'src/components/global/markdownContainer';
import { Container } from 'src/components/global/container';
import { IStaticProps } from 'src/interfaces/IStaticProps';
import { Row } from 'src/components/elements/row';
import { IPages } from 'src/interfaces/IPages';
import { isProduction } from 'src/utils';

interface IPageProps {
	pages: {
		[key in string]: IMarkdownArticleProps;
	};
	name: string;
	redirectLanguageToIndex: boolean;
}

export const config = { amp: 'hybrid' };

/**
 * The Page component.
 * @param {IPageProps} props - The props.
 */
const Page = (props: IPageProps): ReactElement => {
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
        fallback: 'blocking',  
        paths: []
    };
};

/**
 * Returns the static props.
 * @param {IStaticProps} context - The context. 
 */
export const getStaticProps = async (context: IStaticProps): Promise<{}> => {
    let allPages = process.env.markdown.pages.pages;
    if (!isProduction()) {
        const { getPages } = require('config/utils/markdown');
        allPages = (getPages() as IPages).pages;
    }

    const pages = allPages[context.params.name];

    if (!pages?.[context.locale]) {
        return {
            notFound: true
        };
    }

    for (const i in pages) {
        pages[i].source = await serialize(pages[i].source);
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