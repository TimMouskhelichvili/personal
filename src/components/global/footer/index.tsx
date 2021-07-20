import React, { ReactElement } from 'react';
import { StyledCopyright } from './style';
import { enLocale } from 'src/localizations/en';
import { useLocale } from 'src/localizations';

/**
 * The Footer component.
 */
const Footer = (): ReactElement => {
    const locale = useLocale();

    return <>{getCopyright(locale)}</>;
};

/**
 * Returns the copyright.
 * @param {typeof enLocale} locale - The locale. 
 */
const getCopyright = (locale: typeof enLocale): ReactElement => {
    const year = String(new Date().getFullYear());

    return (
        <StyledCopyright>
            {locale.global.footer.copyright.replace('{0}', year)}
        </StyledCopyright>
    );
};

export {
    Footer
};