import React, { ReactElement } from 'react';
import { useAmp } from 'next/amp';
import { configuration } from 'src/configuration';
import { getThemeHTML } from 'src/theme/utils';

/**
 * The AdditionalScripts component.
 */
const AdditionalScripts = (): ReactElement | null => {
    const amp = useAmp();
	
    if (amp) return null;
	
    return (
        <>
            <script dangerouslySetInnerHTML={{ __html: getThemeHTML() }} />
            <script dangerouslySetInnerHTML={{ __html: getAdditionalScriptsHTML() }} />
        </>
    );
};

/**
 * Returns the additional scripts HTML.
 */
const getAdditionalScriptsHTML = (): string => `
	window.addEventListener('load', function () {
		var elements = document.getElementsByClassName('${configuration.classes.triggerTAWK}');
		for (var i = 0; i < elements.length; i++) {
			elements[i].addEventListener('click', function() {
				if (window.Tawk_API) {
					window.Tawk_API.showWidget();
					window.Tawk_API.maximize();
				}
			});
		}
	});
`;

export {
    AdditionalScripts
};