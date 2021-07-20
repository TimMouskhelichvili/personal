import { useAmp } from 'next/amp';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { StyledHeader, StyledButton, StyledHeaderRow } from './style';
import { Options } from 'src/components/global/header/components/options';
import { IState } from 'src/context/interfaces/IState';
import { setHeader } from 'src/context/actions/header';
import { Icon } from 'src/components/elements/icon';
import { useLocale } from 'src/localizations';

/**
 * The Header component.
 */
const Header = (): ReactElement => {
    const { options } = useSelector((state: IState) => state.header);
    const locale = useLocale();
    const dispatch = useDispatch();
    const amp = useAmp();
	
    const sideOptionsTitle = locale.global.hrefs.options;

    const onOptionsOpen = (): void => {
        dispatch(setHeader(true, 'options'));
    };
	
    return (
        <>
            <StyledHeader>
                <StyledHeaderRow>
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