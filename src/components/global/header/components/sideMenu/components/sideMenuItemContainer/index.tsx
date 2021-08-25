import React, { ReactElement, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { StyledSideMenuItemContainer, SideMenuItemClose } from './style';
import { SideMenuItem } from 'src/components/global/header/components/sideMenu/components/sideMenuItem';
import { clearSavedState } from 'src/components/global/header/utils/hook';
import { IState } from 'src/context/interfaces/IState';
import { Icon } from 'src/components/elements/icon';
import { useLocale } from 'src/localizations';

/**
 * The SideMenu Item container.
 */
const SideMenuItemContainer = (): ReactElement => {
    const locale = useLocale();
    const [ items, setItemsState ] = useState([]);
    const sideMenu = useSelector((state: IState) => state.header.sideMenu);
    const setItems = (newItems: []): void => setItemsState(newItems);
    const clear = (): void => setItems([]);
	
    useEffect(() => {
        if (sideMenu) return;

        setTimeout(clear, 150);
        clearSavedState();
    }, [ sideMenu ]);
	
    if (items.length) {
        return (
            <StyledSideMenuItemContainer>
                <SideMenuItemClose onClick={clear}>
                    <Icon icon={faChevronLeft} />
                    {locale.global.goBack}
                </SideMenuItemClose>
                {items.map((x, key) => (
                    <SideMenuItem element={x} key={key} />
                ))}
            </StyledSideMenuItemContainer>
        );
    }

    return (
        <StyledSideMenuItemContainer>
            {locale.global.header.sideMenu.map((x, key) => (
                <SideMenuItem key={key} element={x} setItems={setItems} />
            ))}
        </StyledSideMenuItemContainer>
    );
};

export {
    SideMenuItemContainer
};