import { primaryColors } from 'src/theme';

/**
 * The configuration file.
 */
const configuration = {
    classes: {
        triggerTAWK: 'triggerTAWK'
    },
    defaults: {
        primary: primaryColors[0],
        themeName: 'light'
    },
    env: {
        name: process.env.NODE_ENV
    },
    general: {
        author: 'Tim Mouskhelichvili',
        baseUrl: 'https://timmouskhelichvili.com',
        clutch: '',
        company: 'Tim Mouskhelichvili',
        email: 't.mouskhelichvili@protonmail.com',
        facebook: {
            appId: '1008280046391107'
        },
        github: 'https://github.com/TimMouskhelichvili',
        google: {
            // eslint-disable-next-line max-len
            maps: 'https://www.google.com/maps/place/AftrConsulting+-+Web+Development+Services/@62.3853314,-96.8177377,3z/data=!4m5!3m4!1s0x0:0xdf4a57832b5c7165!8m2!3d62.3853314!4d-96.8177377',
            reviews: 3,
            universal: 'UA-192636657-2'
        },
        imgs: {
            headerLogo: '/static/images/headerLogo.png',
            logo: '/static/images/logo.png',
            openGraphImage: '/static/images/openGraphImage.png'
        },
        linkedIn: 'https://www.linkedin.com/in/tim-mouskhelichvili/',
        phone: '+1 (438) 994-2296',
        youtube: {
            embed: 'https://www.youtube.com/embed/'
        }
    },
    localStorage: {
        primary: 'primary',
        theme: 'theme'
    }
};

export {
    configuration
};