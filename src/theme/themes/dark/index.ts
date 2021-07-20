import { lighten, darken } from 'polished';
import { IColors } from 'src/theme/interfaces/IColors';

const colors: IColors = {
    background: '#181e1f',
    color: '#f6fbfc'
};

/**
 * The darkTheme.
 */
const darkTheme = {
    colors,
    global: {
        background: colors.background,
        borderColor: lighten(.1, colors.background),
        borderRadius: '7px',
        color: colors.color,
        darkModeSwitch: {
            background: darken(.1, '#fafafa')
        },
        header: {
            iconColor: lighten(.6, colors.background),
            options: {
                languages: {
                    activeColor: colors.color,
                    background: lighten(.1, colors.background)
                }
            },
            sideMenu: {
                background: 'rgba(0,0,0,.5)',
                borderColor: lighten(.1, colors.background),
                goBackBackground: darken(.05, colors.background)
            }
        },
        markdown: {
            metaDataColor: lighten(.5, colors.background)
        },
        primaryColors: {
            color: '#fafafa'
        }
    }
};

export {
    darkTheme
};