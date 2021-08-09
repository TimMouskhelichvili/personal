import React, { ReactElement } from 'react';
import { useAmp } from 'next/amp';
import { useRouter } from 'next/router';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { StyledSection, StyledCopyright, StyledName, StyledMailLink, StyledMenu, StyledQuote, StyledPhoneLink } from './style';
import { CustomImage } from 'src/components/elements/customImage';
import { IMenuLinkItem } from 'src/interfaces/IMenuLinkItem';
import { getPhoneLink, isLandingPage } from 'src/utils';
import { MyLink } from 'src/components/elements/link';
import { Icons } from 'src/components/global/icons';
import { Icon } from 'src/components/elements/icon';
import { Row } from 'src/components/elements/row';
import { configuration } from 'src/configuration';
import { enLocale } from 'src/localizations/en';
import { useLocale } from 'src/localizations';

/**
 * The Footer component.
 */
const Footer = (): ReactElement => {
    const router = useRouter();
    const isLanding = isLandingPage(router);
    const amp = useAmp() || isLanding;
    const locale = useLocale();

    return (
        <>
            <StyledSection>
                <Row>
                    <StyledName>
                        <CustomImage src={configuration.general.imgs.headerLogo} height={'40px'} width={'100px'} alt={'logo'} />
                    </StyledName>
                    <StyledQuote>{locale.global.footer.quote}</StyledQuote>
                    <>
                        {!amp && getMenu(locale.global.footer.menu)}
                        {getContactInfo(locale)}
                        {!amp && <Icons />}
                    </>
                </Row>
            </StyledSection>
            {getCopyright(locale)}
        </>
    );
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

/**
 * Returns the contact info.
 * @param {typeof enLocale} locale - The locale. 
 */
const getContactInfo = (locale: typeof enLocale): ReactElement => (
    <div>
        <StyledMailLink href={`mailto:${configuration.general.email}`} title={locale.global.hrefs.email}>
            <Icon icon={faEnvelope} />
            {configuration.general.email}
        </StyledMailLink>
        <div>
            <StyledPhoneLink href={`tel:${getPhoneLink()}`} title={locale.global.hrefs.phone}>
                <Icon icon={faPhoneAlt} />
                {configuration.general.phone}
            </StyledPhoneLink>
        </div>
    </div>
);

/**
 * Returns the menu.
 * @param {IMenuLinkItem[]} menu - The menu. 
 */
const getMenu = (menu: IMenuLinkItem[]): ReactElement => (
    <StyledMenu>
        {menu.map((x, key): ReactElement => (
            <MyLink href={x.href} key={key} title={x.title}>
                {x.title}
            </MyLink>
        ))}
    </StyledMenu>
);

export {
    Footer
};