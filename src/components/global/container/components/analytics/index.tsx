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
            <script dangerouslySetInnerHTML={{ 
                __html: `
					(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
					(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
					m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
					})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

					ga('create', '${configuration.general.google.universal}', 'auto');
					ga('send', 'pageview');`
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