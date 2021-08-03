import React, { ReactElement } from 'react';
import { useAmp } from 'next/amp';
import { configuration } from 'src/configuration';

/**
 * The Analytics component.
 */
const Analytics = (): ReactElement | null => {
    const amp = useAmp();
	
    if (amp) return getAMPAnalytics();
    // if (isLanding) return getGTAGScript();
	
    return (
        <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${configuration.general.google.universal}`} />
            <script dangerouslySetInnerHTML={{ 
                __html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', '${configuration.general.google.universal}');`
            }} />

        </>
    );
};

/**
 * Returns the amp analytics.
 */
const getAMPAnalytics = (): ReactElement => (
    <>
        <amp-analytics type={'googleanalytics'} data-credentials={'include'}>
            <script type={'application/json'} dangerouslySetInnerHTML={{ 
                __html: `{
					"vars" : {
						"account": "${configuration.general.google.universal}"
					},
					"triggers": {
						"trackPageview": {
							"on": "visible",
							"request": "pageview"
						}
					}
				}` 
            }} />
        </amp-analytics>
    </>
);

export {
    Analytics
};