import React, { ReactElement } from 'react';
import { useAmp } from 'next/amp';
import { useRouter } from 'next/router';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { StyledSection, StyledCopyright, StyledName, StyledMailLink, StyledMenu, StyledIcons, StyledQuote, StyledPhoneLink } from './style';
import { IFooterIcon } from 'src/components/global/footer/interfaces/IFooterIcon';
import { iconLinkedIn } from 'src/componentsByPage/home/images/footerLinkedIn';
import { iconGithub } from 'src/componentsByPage/home/images/footerGithub';
import { CustomImage } from 'src/components/elements/customImage';
import { OutsideLink } from 'src/components/elements/outsideLink';
import { IMenuLinkItem } from 'src/interfaces/IMenuLinkItem';
import { getPhoneLink, isLandingPage } from 'src/utils';
import { MyLink } from 'src/components/elements/link';
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
                        {!amp && getIcons([
                            { href: configuration.general.github, icon: iconGithub, title: locale.global.hrefs.github },
                            { href: configuration.general.linkedIn, icon: iconLinkedIn, title: locale.global.hrefs.linkedIn }
                        ])}
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
 * Returns the icons.
 * @param {IFooterIcon[]} icons - The icons. 
 */
const getIcons = (icons: IFooterIcon[]): ReactElement => (
    <StyledIcons>
        {icons.map((x, key): ReactElement => (
            <OutsideLink href={x.href} key={key} title={x.title}>
                <div>
                    <Icon icon={x.icon} />
                </div>
            </OutsideLink>
        ))}
    </StyledIcons>
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