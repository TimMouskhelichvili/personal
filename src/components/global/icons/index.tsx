import React, { ReactElement } from 'react';
import { StyledIcons } from './style';
import { iconLinkedIn } from 'src/componentsByPage/home/images/footerLinkedIn';
import { iconGithub } from 'src/componentsByPage/home/images/footerGithub';
import { OutsideLink } from 'src/components/elements/outsideLink';
import { IIconElement } from 'src/interfaces/IIconElement';
import { Icon } from 'src/components/elements/icon';
import { configuration } from 'src/configuration';
import { useLocale } from 'src/localizations';

/**
 * The Icons component.
 */
const Icons = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <>
            {getIcons([
                { href: configuration.general.github, icon: iconGithub, title: locale.global.hrefs.github },
                { href: configuration.general.linkedIn, icon: iconLinkedIn, title: locale.global.hrefs.linkedIn }
            ])}
        </>
    );
};

/**
 * Returns the icons.
 * @param {IIconElement[]} icons - The icons. 
 */
const getIcons = (icons: IIconElement[]): ReactElement => (
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

export {
    Icons
};