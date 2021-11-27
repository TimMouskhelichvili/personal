import Head from 'next/head';
import React, { ReactElement } from 'react';

interface ISeoHeadProps {
	title: string;
	description: string;
	additionalLinkTags: {}[];
	additionalMetaTags: {}[];
	schema: {} | null;
}

/**
 * The SeoHead component.
 * @param {ISeoProps} props - The props.
 */
const SeoHead = (props: ISeoHeadProps): ReactElement => {
    const robots = 'index,follow';

    return (
        <Head>
            <title>{props.title}</title>
            <meta name={'robots'} content={robots} />
            <meta name={'googlebot'} content={robots} />
            <meta name={'description'} content={props.description} />
            {props.additionalMetaTags.map((x) => (
                <meta key={JSON.stringify(x)} {...x} />
            ))}
            {props.additionalLinkTags.map((x) => (
                <link key={JSON.stringify(x)} {...x} />
            ))}
            {props.schema && 
				<script type={'application/ld+json'} dangerouslySetInnerHTML={{ __html: JSON.stringify(props.schema) }} /> }

        </Head>
    );
};

export {
    SeoHead
};