import React, { ReactElement, useEffect, useState } from 'react';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { SwitchContainerAll, SwitchContainer, SwitchTrack, SwitchInput, SwitchButton, SwitchIcon } from './style';
import { getHTMLThemeAttribute, setHTMLThemeAttribute } from 'src/theme/utils';

/**
 * The DarkModeSwitch component.
 */
const DarkModeSwitch = (): ReactElement => {
    const [ themeName, setThemeName ] = useState('');
	
    useEffect(() => {
        setThemeName(getHTMLThemeAttribute());
    }, []);
	
    const checked = themeName === 'dark';
    const icon = checked ? faMoon : faSun;
	
    const toggleTheme = (): void => {
        const newTheme = themeName === 'light' ? 'dark' : 'light';
        setHTMLThemeAttribute(newTheme);
        setThemeName(newTheme);
    };
	
    return (
        <SwitchContainerAll>
            <SwitchContainer>
                <SwitchIcon 
                    checked={checked} 
                    icon={icon} />
                <SwitchTrack checked={checked} />
                <SwitchButton checked={checked} />
                <SwitchInput
                    id={'darkMode'}
                    checked={checked}
                    type={'checkbox'}
                    onChange={toggleTheme} />
            </SwitchContainer>
        </SwitchContainerAll>
    );
};

export {
    DarkModeSwitch
};