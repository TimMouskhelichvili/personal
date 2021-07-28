import { useAmp } from 'next/amp';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faBars, faCog } from '@fortawesome/free-solid-svg-icons';
import { StyledHeader, StyledButton, StyledHeaderRow } from './style';
import { SubHeader } from 'src/components/global/header/components/subHeader';
import { Options } from 'src/components/global/header/components/options';
import { IState } from 'src/context/interfaces/IState';
import { setHeader } from 'src/context/actions/header';
import { Icon } from 'src/components/elements/icon';
import { useLocale } from 'src/localizations';
import { isLandingPage } from 'src/utils';

/**
 * The Header component.
 */
const Header = (): ReactElement => {
    const { options, sideMenu } = useSelector((state: IState) => state.header);
    const router = useRouter();
    const locale = useLocale();
    const dispatch = useDispatch();
    const amp = useAmp() || isLandingPage(router);
	
    const sideMenuTitle = locale.global.hrefs.sideMenu;
    const sideOptionsTitle = locale.global.hrefs.options;
	
    const onSideMenuOpen = (): void => {
        dispatch(setHeader(true, 'sideMenu'));
    };

    const onOptionsOpen = (): void => {
        dispatch(setHeader(true, 'options'));
    };
	
    return (
        <>
            <StyledHeader>
                <StyledHeaderRow>
                    {!amp && 
						<StyledButton onClick={onSideMenuOpen} open={sideMenu} title={sideMenuTitle} aria-label={sideMenuTitle}>
						    <Icon icon={faBars} />
						</StyledButton>}
                    <SubHeader />
                    {!amp && 
						<StyledButton onClick={onOptionsOpen} open={options} title={sideOptionsTitle} aria-label={sideOptionsTitle}>
						    <Icon icon={faCog} />
						</StyledButton>}
                </StyledHeaderRow>
            </StyledHeader>
            <Options />
        </>
    );
};

export {
    Header
};