import React, { ReactElement } from 'react';
import { useAmp } from 'next/amp';
import { useRouter } from 'next/router';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { StyledSubHeaderContainer, StyledButtonContainer, StyledTelephone } from './style';
import { SubHeaderItem } from 'src/components/global/header/components/subHeader/components/subHeaderItem';
import { Logo } from 'src/components/global/header/components/logo';
import { getPhoneLink, isLandingPage } from 'src/utils';
import { Icon } from 'src/components/elements/icon';
import { configuration } from 'src/configuration';
import { CTA } from 'src/components/special/cta';
import { useLocale } from 'src/localizations';
import { useIsBlogPage } from 'src/utils/hooks';

/**
 * The SubHeader Component.
 */
const SubHeader = (): ReactElement => {
    const router = useRouter();
    const isLanding = isLandingPage(router);
    const isBlogPage = useIsBlogPage();
    const amp = useAmp() || isLanding;
    const locale = useLocale();

    return (
        <>
            <Logo hideLanguage={amp} isLanding={isLanding} />
            <StyledSubHeaderContainer>
                {(!amp && !isBlogPage) && locale.global.header.menu.map((x, key) => (
                    <SubHeaderItem key={key} element={x} />
                ))}
            </StyledSubHeaderContainer>
            <StyledButtonContainer amp={amp}>
                {isLanding && <StyledTelephone>
                    <a href={`tel:${getPhoneLink()}`}>
                        <Icon icon={faPhoneAlt} />
                        {configuration.general.phone}
                    </a>
                </StyledTelephone>}
                <CTA />
            </StyledButtonContainer>
        </>
    );
};

export {
    SubHeader
};