import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import React, { ReactElement, useState } from 'react';
import { SubHeaderItemWithSubMenuContainer } from './style';
import { MyLink } from 'src/components/elements/link';
import { IMenuItem } from 'src/interfaces/IMenuItem';
import { Icon } from 'src/components/elements/icon';

interface ISubHeaderItemWithSubMenuProps {
	element: IMenuItem;
}

/**
 * Returns the subheader item with submenu.
 * @param {ISubHeaderItemWithSubMenuProps} props - The props.
 */
const SubHeaderItemWithSubMenu = (props: ISubHeaderItemWithSubMenuProps): ReactElement => {
    const [ open, setOpenState ] = useState(false);
	
    const onOpen = (): void => setOpenState(true);
    const onClose = (): void => setOpenState(false);
	
    return (
        <div onMouseEnter={onOpen} onMouseLeave={onClose}>
            {props.element.title}	
            <Icon icon={faChevronDown} />
            {open &&
				<SubHeaderItemWithSubMenuContainer>
				    {props.element.subItems?.map((x, key) => (
				        <MyLink href={x.href} key={key} onClick={onClose} title={x.title}>
				            {x.title}
				        </MyLink>
				    ))}
				</SubHeaderItemWithSubMenuContainer>}
        </div>
    );
};

export {
    SubHeaderItemWithSubMenu
};