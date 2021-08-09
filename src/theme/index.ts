import { lightTheme } from 'src/theme/themes/light';
import { darkTheme } from 'src/theme/themes/dark';

/**
 * The themes.
 */
const themes = {
    dark: darkTheme,
    light: lightTheme
};

/**
 * The themes name.
 */
const themesName = [
    'dark',
    'light'
];

/**
 * The devices.
 */
const devices = {
    mediumMobile: '550px',
    mobile: '700px',
    smallMobile: '485px',
    smallTablet: '1000px',
    tablet: '1200px',
    verySmallMobile: '370px'
};

/**
 * All primary colors.
 */
const primaryColors = [ 
    '#BD4B4B',
    '#50CB93',
    '#FFAA4C',
    '#5089C6'
];


export {
    themes,
    devices,
    primaryColors,
    themesName
};