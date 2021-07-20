/* eslint-disable sort-keys */
import { useAmp } from 'next/amp';
import React, { ReactElement } from 'react';
import { NextRouter, useRouter } from 'next/router';
import { IAlternateLinkProps } from 'src/components/global/seo/interfaces/IAlternateLinkProps';
import { SeoHead } from 'src/components/global/seo/component/seoHead';
import { getSitemapRoutesForLanguage } from 'config/utils/sitemap';
import { configuration } from 'src/configuration';

interface ISeoProps {
	title: string;
	seoTitle?: string;
	description?: string;
	hasAmp?: boolean;
	openGraphImage?: string;
}

/**
 * The Seo component.
 * @param {ISeoProps} props - The props.
 */
const Seo = (props: ISeoProps): ReactElement => {
    const amp = useAmp();
    const router = useRouter();
	
    const image = props.openGraphImage || `${configuration.general.baseUrl}${configuration.general.imgs.openGraphImage}`;
    const additionalLinkTags = getAdditionalLinkTags(router, amp, props.hasAmp);
    const title = replaceSEOTags(props.seoTitle || props.title);
    const description = props.description?.replace(/\s+/g, ' ') || '';
	
    const path = getPath(router.asPath);
    const locale = router.locale === 'en' ? '' : `/${router.locale}`;

    return (
        <SeoHead
            title={title}
            description={description}
            additionalLinkTags={additionalLinkTags}
            additionalMetaTags={[
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: title },
                { property: 'og:url', content: getLinkHref(locale, path) },
                { property: 'og:description', content: description },
                { property: 'og:image', content: image },
                { property: 'og:image:alt', content: 'logo' },
                { property: 'og:image:width', content: '1200' },
                { property: 'og:image:height', content: '630' },
                { property: 'og:locale', content: router.locale },
                { property: 'og:site_name', content: configuration.general.company },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: title },
                { name: 'twitter:description', content: description },
                { name: 'twitter:image', content: image },
                { name: 'twitter:site', content: configuration.general.twitter.account }
            ]}
        />
    );
};

/**
 * Returns the additional link tags.
 * @param {NextRouter} router - The router. 
 * @param {boolean} amp - The amp. 
 * @param {boolean} hasAmp - If has amp. 
 */
const getAdditionalLinkTags = (router: NextRouter, amp: boolean, hasAmp?: boolean): IAlternateLinkProps[] => {
    const additionalLinkTags = getAlternateLanguages(router);
    const path = getPath(router.asPath);
    const locale = router.locale === 'en' ? 
        '' : `/${router.locale}`;
	
    if (hasAmp && !amp) {
        additionalLinkTags.push({
            rel: 'amphtml',
            href: getLinkHref(locale, path, true)
        });
    }
	
    additionalLinkTags.push({
        rel: 'canonical',
        href: getLinkHref(locale, path)
    });
	
    return additionalLinkTags;
};

/**
 * Returns the alternate languages.
 * @param {NextRouter} router - The router. 
 */
const getAlternateLanguages = (router: NextRouter): IAlternateLinkProps[] => {
    const additionalLinkTags = [];
    const path = getPath(router.asPath);
	
    const enSupported = getSitemapRoutesForLanguage(process.env.sitemapLocales, 'en').find(x => x.href === path);
    const frSupported = getSitemapRoutesForLanguage(process.env.sitemapLocales, 'fr').find(x => x.href === `/fr${path}`);
	
    if (enSupported) {
        additionalLinkTags.push({
            rel: 'alternate',
            href: getLinkHref('', path),
            hrefLang: 'en'
        });
    }

    if (frSupported) {
        additionalLinkTags.push({
            rel: 'alternate',
            href: getLinkHref('/fr', path),
            hrefLang: 'fr'
        });
    }
	
    const locale = enSupported ? '' : '/fr';
	
    additionalLinkTags.push({
        rel: 'alternate',
        href: getLinkHref(locale, path),
        hrefLang: 'x-default'
    });
	
    return additionalLinkTags;
};

/**
 * Returns the link href.
 * @param {string} locale - The locale. 
 * @param {string} path - The path. 
 * @param {boolean} amp - The amp. 
 */
const getLinkHref = (locale = '', path = '', amp = false): string => {
    let href = `${configuration.general.baseUrl}${locale}${path}`;

    if (href[href.length - 1] === '/') {
        href = href.substring(0, href.length - 1);
    }
	
    if (amp) {
        href += '?amp=1';
    }
	
    return href;
};

/**
 * Returns the path.
 * @param {string} asPath - The as path. 
 */
const getPath = (asPath: string): string => {
    if (asPath.indexOf('?') === -1) return asPath;

    return asPath.substr(0, asPath.indexOf('?'));
};

/**
 * Replaces SEO tags.
 * @param {string} str - The string. 
 */
const replaceSEOTags = (str: string): string => {
    if (!str) return '';

    return str.replace('{COMPANY}', configuration.general.company);
};

export {
    getAlternateLanguages,
    Seo
};