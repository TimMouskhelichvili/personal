import React, { ReactElement } from 'react';
import { StyledLink } from './style';
import { Title } from 'src/components/global/title';
import { useLocale } from 'src/localizations';

/**
 * The NotFoundContainer component.
 */
const NotFoundContainer = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <>
            <Title title={locale.pages.notFound.title} />
            <div>{locale.pages.notFound.subTitle}</div>
            <StyledLink href={'/'}>
                {locale.pages.notFound.button}
            </StyledLink>
        </>
    );
};

export {
    NotFoundContainer
};