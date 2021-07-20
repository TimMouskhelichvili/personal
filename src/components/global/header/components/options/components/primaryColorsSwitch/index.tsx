import React, { ReactElement, useEffect, useState } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { StyledPrimaryColor } from './style';
import { getHTMLPrimaryAttribute, setHTMLPrimaryAttribute } from 'src/theme/utils';
import { Icon } from 'src/components/elements/icon';
import { primaryColors } from 'src/theme';

/**
 * The primary colors switch component.
 */
const PrimaryColorsSwitch = (): ReactElement => {
    const [ primary, setPrimaryState ] = useState('');

    useEffect(() => {
        setPrimaryState(getHTMLPrimaryAttribute());
    }, []);
	
    const changeColor = (color: string) => (): void => {
        setHTMLPrimaryAttribute(color);
        setPrimaryState(color);
    };

    return (
        <div>
            {primaryColors.map((color, key) => (
                <StyledPrimaryColor
                    onClick={changeColor(color)}
                    active={color === primary}
                    primary={color} 
                    key={key}>
                    <Icon icon={faCheck} />
                </StyledPrimaryColor>
            ))}
        </div>
    );
};

export {
    PrimaryColorsSwitch
};