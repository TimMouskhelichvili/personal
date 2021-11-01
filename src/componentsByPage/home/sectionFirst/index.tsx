import React, { ReactElement } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { StyleImgContainer, StyledSection, StyledH1, StyledPerksContainer, StyledButton, StyledRow, StyledImgContainer } from './style';
import { CustomImage } from 'src/components/elements/customImage';
import { TechIcon } from 'src/componentsByPage/home/techLogo';
import { SpanText } from 'src/components/elements/spanText';
import { Icon } from 'src/components/elements/icon';
import { useLocale } from 'src/localizations';

/**
 * The SectionFirst component.
 */
const SectionFirst = (): ReactElement => {
    const locale = useLocale();
    const { heading, perks, alt } = locale.pages.home.first;

    return (
        <StyledSection>
            <StyledRow>
                <div>
                    <StyledH1><SpanText html={heading} /></StyledH1>
                    {getPerks(perks)}
                    <StyledButton withIcon={true} />
                    {getTechIcons()}
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
 * Returns the tech icons.
 */
const getTechIcons = (): ReactElement => (
    <StyledImgContainer>
        <TechIcon icon={'react'} />
        <TechIcon icon={'nodejs'} />
        <TechIcon icon={'typescript'} />
    </StyledImgContainer>
);
export {
    SectionFirst
};