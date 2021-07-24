import { darken, lighten } from 'polished';
import { IColors } from 'src/theme/interfaces/IColors';
import { darkTheme } from 'src/theme/themes/dark';

const colors: IColors = {
    background: '#fafafa',
    color: '#181e1f'
};

/**
 * The lightTheme.
 */
const lightTheme: typeof darkTheme = { 
    colors,
    global: {
        background: colors.background,
        borderColor: darken(.05, colors.background),
        borderRadius: '7px',
        color: colors.color,
        darkModeSwitch: {
            background: darken(.15, colors.background)
        },
        header: {
            iconColor: darken(.5, colors.background),
            options: {
                languages: {
                    activeColor: colors.background,
                    background: darken(.15, colors.background)
                }
            },
            sideMenu: {
                background: 'rgba(255,255,255,.4)',
                borderColor: darken(.1, colors.background),
                goBackBackground: darken(.05, colors.background)
            }
        },
        markdown: {
            metaDataColor: lighten(.5, colors.color)
        },
        primaryColors: {
            color: '#fafafa'
        }
    }
};

export {
    lightTheme
};