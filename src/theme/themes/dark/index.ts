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
            logo: {
                background: lighten(.2, colors.background),
                landingSmallBackground: lighten(.1, colors.background),
                language: {
                    background: lighten(.3, colors.background),
                    backgroundHover: lighten(.4, colors.background),
                    color: colors.color
                }
            },
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