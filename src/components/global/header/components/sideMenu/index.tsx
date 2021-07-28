import React, { ReactElement } from 'react';
import { StyledLogoContainer, StyledSideMenuItemFooterContainer } from './style';
import { SideMenuItemContainer } from 'src/components/global/header/components/sideMenu/components/sideMenuItemContainer';
import { useSaveStateBeforeLanguageChange } from 'src/components/global/header/utils/hook';
import { Slider } from 'src/components/global/header/components/slider';
import { Logo } from 'src/components/global/header/components/logo';
import { CTA } from 'src/components/special/cta';

/**
 * The SideMenu component.
 */
const SideMenu = (): ReactElement => {
    const [ , removeState ] = useSaveStateBeforeLanguageChange();
	
    return (
        <Slider header={'sideMenu'} onClose={removeState}>
            <StyledLogoContainer>
                <Logo />
            </StyledLogoContainer>
            <SideMenuItemContainer />
            <StyledSideMenuItemFooterContainer>
                <CTA />
            </StyledSideMenuItemFooterContainer>
        </Slider>
    );
};

export {
    SideMenu
};