import React, { ReactElement } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { 
    StyleImgContainer, StyledSection, StyledSubH1, StyledH1, StyledPerksContainer, StyledUnderStars, StyledButton, StyledRow
} from './style';
import { CustomImage } from 'src/components/elements/customImage';
import { Icon } from 'src/components/elements/icon';
import { useLocale } from 'src/localizations';

/**
 * The FirstSection component.
 */
const FirstSection = (): ReactElement => {
    const locale = useLocale();
	
    return (
        <StyledSection>
            <StyledRow>
                <div>
                    <StyledSubH1>{locale.pages.home.first.subHeading}</StyledSubH1>
                    <StyledH1>{locale.pages.home.first.heading}</StyledH1>
                    {getPerks(locale.pages.home.first.perks)}
                    <StyledUnderStars>{locale.pages.home.first.text2}</StyledUnderStars>
                    <StyledButton withIcon={true} />
                </div>
                <StyleImgContainer>
                    <div>
                        <CustomImage 
                            height={'400px'}
                            width={'450px'}
                            src={'/static/images/home/timMouskhelichvili.jpg'} />
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