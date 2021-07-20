import React, { ReactElement } from 'react';
import { SVGDiv } from './style';
import { IIconDefinition } from 'src/components/elements/icon/interfaces/IIconDefinition';

interface IIconProps {
	icon: IIconDefinition;
	className?: string;
}

/**
 * The Icon component.
 * @param {IIconProps} props - The props. 
 */
const Icon = (props: IIconProps): ReactElement => {
    const width = props.icon.icon[0];
    const height = props.icon.icon[1];
    const viewBox = `0 0 ${width} ${height}`;
    const path = props.icon.icon[4] as string;

    return (
        <SVGDiv 
            focusable="false" 
            role="img" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox={viewBox} 
            className={props.className}>
            <path fill="currentColor" d={path}></path>
        </SVGDiv>
    );
};

export {
    Icon
};