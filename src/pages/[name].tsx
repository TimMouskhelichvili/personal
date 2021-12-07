import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { serialize } from 'next-mdx-remote/serialize';
import { IMarkdownArticleProps } from 'src/interfaces/IMarkdownArticleProps';
import { MarkdownContainer } from 'src/components/global/markdownContainer';
import { Container } from 'src/components/global/container';
import { IStaticProps } from 'src/interfaces/IStaticProps';
import { Row } from 'src/components/elements/row';

interface IPageProps {
	pages: {
		[key in string]: IMarkdownArticleProps;
	};
	name: string;
	redirectLanguageToIndex: boolean;
}

/**
 * The Page component.
 * @param {IPageProps} props - The props.
 */
const Page = (props: IPageProps): ReactElement => {
    const router = useRouter();
    const page = props.pages?.[router.locale as string];

    return (
        <Container redirectLanguageToIndex={props.redirectLanguageToIndex}>
            <Row maxWidth={'700px'}>
                <MarkdownContainer {...page} hasAmp={true} clear={true} />
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
        paths: process.env.paths.pages
    };
};

/**
 * Returns the static props.
 * @param {IStaticProps} context - The context. 
 */
export const getStaticProps = async (context: IStaticProps): Promise<{}> => {
    const path = `public/static/markdown/pages/${context.params.name}/`;
    const { getLanguagesMarkdown } = require('config/utils/markdown');
    const pages = getLanguagesMarkdown(path, { withSource: true });
	
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