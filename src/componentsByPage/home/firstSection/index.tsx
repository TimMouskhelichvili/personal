import React, { ReactElement } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { 
    StyleImgContainer, StyledSection, StyledSubH1, StyledH1, StyledPerksContainer, StyledUnderStars, StyledButton, StyledRow
} from './style';
import { CustomImage } from 'src/components/elements/customImage';
import { Icon } from 'src/components/elements/icon';

/**
 * The FirstSection component.
 */
const FirstSection = (): ReactElement => {
    return (
        <StyledSection>
            <StyledRow>
                <div>
                    <StyledSubH1>Software Engineer & Consultant</StyledSubH1>
                    <StyledH1>Tim Mouskhelichvili</StyledH1>
                    {getPerks([
                        'Full-Stack Web Developer \u00A0💪',
                        'JavaScript Expert (React, TypeScript, Vanilla.js)\u00A0🏆',
                        'On-Time Delivery\u00A0⌛',
                        'Delivers Top Results\u00A0🏆'
                    ])}
                    <StyledUnderStars>I guarantee TOP RESULTS on all my projects.</StyledUnderStars>
                    <StyledButton withIcon={true} />
                </div>
                <StyleImgContainer>
                    <div>
                        <CustomImage 
                            height={'400px'}
                            width={'450px'}
                            src={'/static/images/home/timmouskhelichvili.jpg'} />
                    </div>
                </StyleImgContainer>
            </StyledRow>
        </StyledSection>
    );
};

/**
 * Returns the perks.
 * @param {string[]} perks - The perks. 
 */
const getPerks = (perks: string[]): ReactElement => (
    <StyledPerksContainer>
        {perks.map((x, key): ReactElement => (
            <li key={key}>
                <Icon icon={faCheck} /> {x}
            </li>
        ))}
    </StyledPerksContainer>
);

export {
    FirstSection
};