import React, { ReactElement } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { 
    StyleImgContainer, StyledSection, StyledSubH1, StyledH1, StyledPerksContainer, StyledUnderStars, StyledButton, StyledRow
} from './style';
import { CustomImage } from 'src/components/elements/customImage';
import { Icon } from 'src/components/elements/icon';
import { useLocale } from 'src/localizations';

/**
 * The SectionFirst component.
 */
const SectionFirst = (): ReactElement => {
    const locale = useLocale();
    const { subHeading, heading, perks, text2 } = locale.pages.home.first;

    return (
        <StyledSection>
            <StyledRow>
                <div>
                    <StyledSubH1>{subHeading}</StyledSubH1>
                    <StyledH1>{heading}</StyledH1>
                    {getPerks(perks)}
                    <StyledUnderStars>{text2}</StyledUnderStars>
                    <StyledButton withIcon={true} />
                </div>
                <StyleImgContainer>
                    <div>
                        <CustomImage
                            loading={'lazy'} 
                            height={'400px'}
                            width={'450px'}
                            alt={heading}
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
    SectionFirst
};