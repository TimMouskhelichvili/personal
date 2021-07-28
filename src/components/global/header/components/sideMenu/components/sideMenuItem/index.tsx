import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { StyledSideMenuItemContainer } from './style';
import { setHeader } from 'src/context/actions/header';
import { MyLink } from 'src/components/elements/link';
import { IMenuItem } from 'src/interfaces/IMenuItem';
import { Icon } from 'src/components/elements/icon';

interface ISideMenuProps {
	element: IMenuItem;
	setItems?: (newItems: []) => void;
}

/**
 * The SideMenuItem component.
 * @param {ISideMenuProps} props - The props.
 */
const SideMenuItem = (props: ISideMenuProps): ReactElement => {
    const dispatch = useDispatch();
	
    const close = (): void => {
        dispatch(setHeader(false, 'sideMenu'));
    };
	
    return (
        <StyledSideMenuItemContainer>
            {getItem(props, close)}
        </StyledSideMenuItemContainer>
    );
};

/**
 * Returns the item.
 * @param {ISideMenuProps} props - The props. 
 * @param {() => void} close - The close.
 */
const getItem = (props: ISideMenuProps, close: () => void): ReactElement => {
    if (props.element.subItems) {
        const onClick = (): void => {
            props.setItems?.(props.element.subItems as never);
        };

        return (
            <div onClick={onClick}>
                {props.element.title}
                <Icon icon={faChevronRight} />
            </div>
        );
    }

    if (props.element.href) {
        return (
            <MyLink href={props.element.href} onClick={close} title={props.element.title}>
                {props.element.title}
            </MyLink>
        );
    }
	
    return <div>{props.element.title}</div>;
};

export {
    SideMenuItem
};