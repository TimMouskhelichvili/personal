import React, { ReactElement } from 'react';
import { useAmp } from 'next/amp';
import { useLocale } from 'src/localizations';

/**
 * The Chat component.
 */
const Chat = (): ReactElement | null => {
    const locale = useLocale();
    const amp = useAmp();
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