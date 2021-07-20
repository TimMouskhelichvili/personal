import React, { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { StyledLink, StyledContainer } from './style';
import { getSitemapRoutesForLanguage } from 'config/utils/sitemap';

/**
 * The Sitemap routes.
 */
const SitemapRoutes = (): ReactElement => {
    const router = useRouter();
    const [ routes, setRoutes ] = useState(getRoutes(router.locale));

    useEffect(() => {
        setRoutes(getRoutes(router.locale));
    }, [ router.locale ]);
	
    return (
        <StyledContainer>
            {routes.map((x, key) => {
                if (x.exclude) return null;
					
                return (
                    <div key={key}>
                        <StyledLink href={x.href}>
                            {x.title}
                        </StyledLink>
                    </div>
                );
            })}
        </StyledContainer>
    );
};

/**
 * Returns the routes.
 * @param {string} locale - The locale. 
 */
const getRoutes = (locale?: string): { href: string, title: string, exclude: boolean }[] => {
    const sitemapLocales = process.env.sitemapLocales;
	
    return getSitemapRoutesForLanguage(sitemapLocales, locale as string);
};

export {
    SitemapRoutes
};