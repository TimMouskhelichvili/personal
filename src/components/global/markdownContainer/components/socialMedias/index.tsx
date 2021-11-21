import React, { ReactElement } from 'react';
import { faFacebookSquare, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { StyledFixedContainer, StyledContainer, StyledButton } from './style';
import { Icon } from 'src/components/elements/icon';
import { myColors } from 'src/theme';
import { getPopUp } from 'src/utils';

/**
 * The SocialMedias component.
 */
const SocialMedias = (): ReactElement => {
    return (
        <StyledContainer>
            <StyledFixedContainer>
                <StyledButton backgroundColor={myColors.facebook} onClick={onClick('facebook')}>
                    <Icon icon={faFacebookSquare} />
                </StyledButton>
                <StyledButton backgroundColor={myColors.twitter} onClick={onClick('twitter')}>
                    <Icon icon={faTwitter} />
                </StyledButton>
                <StyledButton backgroundColor={myColors.linkedIn} onClick={onClick('linkedIn')}>
                    <Icon icon={faLinkedinIn} />
                </StyledButton>
            </StyledFixedContainer>
        </StyledContainer>
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

    getPopUp(url);
};

export {
    SocialMedias
};