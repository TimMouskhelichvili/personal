import React, { useAmp } from 'next/amp';
import { ReactElement } from 'react';
import { isProduction } from 'src/utils';

/**
 * The AMPAnalyticsScript component. 
 */
const AMPAnalyticsScript = (): ReactElement | null => {
    const amp = useAmp();

    if (!amp || !isProduction()) return null;

    return (
        <script async custom-element={'amp-analytics'} src={'https://cdn.ampproject.org/v0/amp-analytics-0.1.js'} />
    );
};

export {
    AMPAnalyticsScript
};