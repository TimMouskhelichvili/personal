import React, { ReactElement } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { 
    StyleImgContainer, StyledSection, StyledH1, StyledPerksContainer, 
    StyledSatisfaction, StyledButton, StyledRow, StyledSealsContainer, StyledSubH1, StyledSubPerk
} from './style';
import { CustomImage } from 'src/components/elements/customImage';
import { Google } from 'src/components/seals/google';
import { Icon } from 'src/components/elements/icon';
import { useLocale } from 'src/localizations';
import { SpanText } from 'src/components/elements/spanText';

/**
 * The SectionFirst component.
 */
const SectionFirst = (): ReactElement => {
    const locale = useLocale();
    const { heading, perks, text2, alt, subHeading } = locale.pages.home.first;

    return (
        <StyledSection>
            <StyledRow>
                <div>
                    <StyledH1><SpanText html={heading} /></StyledH1>
                    <StyledSubH1>{subHeading}</StyledSubH1>
                    {getPerks(perks)}
                    <StyledSubPerk>{'Then, I\'m definitely your guy!'}</StyledSubPerk>
                    <StyledButton withIcon={true} />
                    <StyledSatisfaction>{text2}</StyledSatisfaction>
                </div>
                <StyleImgContainer>
                    <div>
                        <CustomImage
                            title={alt}
                            loading={'lazy'} 
                            height={'400px'}
                            width={'450px'}
                            alt={alt}
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

/**
 * Returns the seals.
 */
const getSeals = (): ReactElement => (
    <StyledSealsContainer>
        <Google disabled={true} />
    </StyledSealsContainer>
);

export {
    SectionFirst
};