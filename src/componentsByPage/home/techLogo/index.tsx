import React, { ReactElement } from 'react';
import { TechLogo } from 'src/types/techLogo';

interface ITechIconProps {
	icon: TechLogo;
	className?: string;
}

/**
 * The tech icon component.
 * @param {ITechIconProps} props - The props. 
 */
const TechIcon = (props: ITechIconProps): ReactElement | null => {
    const icons = {
        'nodejs': '0 0 256 282',
        'react': '0 0 256 230',
        'typescript': '0 0 256 256'
    };

    if (!icons[props.icon]) return null;

    return (
        <svg viewBox={icons[props.icon]} className={props.className}>
            <use href={`/static/images/home/services/${props.icon}.svg#main`}></use>
        </svg>
    );
};

export {
    TechIcon
};