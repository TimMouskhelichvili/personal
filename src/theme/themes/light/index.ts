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
        footer: {
            background: darken(.05, colors.background),
            icon: {
                background: colors.color,
                color: 'white'
            },
            menuColor: darken(.6, colors.background)
        },
        header: {
            iconColor: darken(.5, colors.background),
            logo: {
                background: darken(.1, colors.background),
                landingSmallBackground: lighten(.1, colors.color),
                language: {
                    background: darken(.05, colors.background),
                    backgroundHover: darken(.08, colors.background),
                    color: lighten(.2, colors.color)
                }
            },
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
            background: darken(.05, colors.background),
            metaDataColor: lighten(.5, colors.color)
        },
        primaryColors: {
            color: '#fafafa'
        }
    },
    pages: {
        home: {
            description: {
                background: darken(.05, colors.background)
            },
            first: {
                techIconBackground: darken(.3, colors.background)
            },
            quotes: {
                background: lighten(.75, colors.color)
            },
            services: {
                cardBackground: darken(.05, colors.background)
            }
        },
        portfolio: {
            cardBackground: darken(.08, colors.background),
            image: {
                background: darken(.05, colors.background)
            }
        }
    }
};

export {
    lightTheme
};