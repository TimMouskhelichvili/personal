import React, { ReactElement } from 'react';
import { StyledSubHeaderItemContainer } from './style';
import { SubHeaderItemWithSubMenu } from 'src/components/global/header/components/subHeader/components/subHeaderItemWithSubMenu';
import { MyLink } from 'src/components/elements/link';
import { IMenuItem } from 'src/interfaces/IMenuItem';


interface ISubHeaderItemProps {
	element: IMenuItem;
}

/**
 * The SubHeaderItem Component.
 * @param {ISubHeaderItemProps} props - The props.
 */
const SubHeaderItem = (props: ISubHeaderItemProps): ReactElement => {
    return (
        <StyledSubHeaderItemContainer>
            {props.element.subItems ? 
                <SubHeaderItemWithSubMenu {...props} /> : 
                <MyLink href={props.element.href as string} title={props.element.title}>
                    {props.element.title}
                </MyLink>}
        </StyledSubHeaderItemContainer>
    );
};

export {
    SubHeaderItem
};