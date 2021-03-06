import React, { ReactElement } from 'react';
import { faFacebookSquare, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useAmp } from 'next/amp';
import Script from 'next/script';
import { StyledButton, StyledAmpContainer } from './style';
import { Icon } from 'src/components/elements/icon';
import { configuration } from 'src/configuration';
import { createPopUp } from 'src/utils';
import { myColors } from 'src/theme';

/**
 * The SocialMedias component.
 */
const SocialMedias = (): ReactElement => {
    const amp = useAmp();

    if (amp) {
        return (
            <>
                <Script async custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js" />
                <StyledAmpContainer>
                    <amp-social-share type="facebook" data-param-app_id={configuration.general.facebook.appId} />
                    <amp-social-share type="twitter" />
                    <amp-social-share type="linkedin" />
                </StyledAmpContainer>
            </>
        );
    }
	
    return (
        <>
            <StyledButton backgroundColor={myColors.facebook} onClick={onClick('facebook')}>
                <Icon icon={faFacebookSquare} />
            </StyledButton>
            <StyledButton backgroundColor={myColors.twitter} onClick={onClick('twitter')}>
                <Icon icon={faTwitter} />
            </StyledButton>
            <StyledButton backgroundColor={myColors.linkedIn} onClick={onClick('linkedIn')}>
                <Icon icon={faLinkedinIn} />
            </StyledButton>
        </>
    );
};

/**
 * The onClick handler.
 * @param {string} website - The website.
 */
const onClick = (website: 'facebook' | 'twitter' | 'linkedIn') => (): void => {
    let url = '';
    const current = encodeURIComponent(location.href);

    switch (website) {
        case 'facebook':
            url = `https://www.facebook.com/sharer/sharer.php?u=${current}`;
            break;
        case 'twitter':
            url = `https://twitter.com/intent/tweet?url=${current}`;
            break;
        case 'linkedIn': 
            url = `https://www.linkedin.com/sharing/share-offsite/?url=${current}`;
            break;
    }

    createPopUp(url);
};

export {
    SocialMedias
};