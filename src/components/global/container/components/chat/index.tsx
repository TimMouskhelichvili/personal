import React, { ReactElement, useEffect } from 'react';
import { useAmp } from 'next/amp';
import { useLocale } from 'src/localizations';
import { useIsBlogPage } from 'src/utils/hooks';

/**
 * The Chat component.
 */
const Chat = (): ReactElement | null => {
    const locale = useLocale();
    const amp = useAmp();
    const isBlogPage = useIsBlogPage();

    useEffect(() => {
        if (amp) return;

        if (isBlogPage) {
            window.Tawk_API.onLoad = (): void => {
                window.Tawk_API?.hideWidget();
            };
            window.Tawk_API?.hideWidget?.();
        } else {
            window.Tawk_API.onLoad = (): void => {
                window.Tawk_API?.showWidget();
            };
            window.Tawk_API?.showWidget?.();
        }
    }, [ isBlogPage ]);

    if (amp) return null;
	
    return (
        <>
            <script async dangerouslySetInnerHTML={{ __html: 'var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();' }} />
            <script async src={locale.global.tawkTo} crossOrigin={'*'} />
        </>
    );
};

export {
    Chat
};