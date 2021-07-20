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
    '#d64541',
    '#794bc4',
    '#f45d22',
    '#17bf63'
];


export {
    themes,
    devices,
    primaryColors,
    themesName
};